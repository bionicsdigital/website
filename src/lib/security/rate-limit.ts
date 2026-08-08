import { hasDistributedStore, redisCommand } from './redis'
import { createHash } from 'node:crypto'

type Entry = { count: number; resetAt: number }
const developmentStore = new Map<string, Entry>()

export type RateLimitResult = { allowed: boolean; retryAfter: number; distributed: boolean }

export async function rateLimit(namespace: string, identity: string, limit: number, windowSeconds: number): Promise<RateLimitResult> {
  const identityHash = createHash('sha256').update(identity).digest('hex').slice(0, 32)
  const key = `security:rate:v1:${namespace}:${identityHash}`
  if (hasDistributedStore()) {
    const script = "local count=redis.call('INCR',KEYS[1]); if count==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]); end; return {count,redis.call('TTL',KEYS[1])}"
    const [rawCount, rawTtl] = await redisCommand<[number, number]>(['EVAL', script, 1, key, windowSeconds])
    const count = Number(rawCount)
    const ttl = Math.max(1, Number(rawTtl))
    return { allowed: count <= limit, retryAfter: ttl, distributed: true }
  }

  if (process.env.NODE_ENV === 'production' && process.env.SECURITY_REQUIRE_DISTRIBUTED_STORE !== 'false') {
    throw new Error('DISTRIBUTED_STORE_REQUIRED')
  }

  const now = Date.now()
  if (developmentStore.size >= 5000) {
    for (const [storedKey, entry] of developmentStore) if (entry.resetAt <= now) developmentStore.delete(storedKey)
    if (developmentStore.size >= 5000) developmentStore.delete(developmentStore.keys().next().value as string)
  }
  const current = developmentStore.get(key)
  if (!current || current.resetAt <= now) {
    developmentStore.set(key, { count: 1, resetAt: now + windowSeconds * 1000 })
    return { allowed: true, retryAfter: windowSeconds, distributed: false }
  }
  current.count += 1
  return { allowed: current.count <= limit, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)), distributed: false }
}
