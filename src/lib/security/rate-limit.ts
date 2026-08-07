import { hasDistributedStore, redisCommand } from './redis'

type Entry = { count: number; resetAt: number }
const developmentStore = new Map<string, Entry>()

export type RateLimitResult = { allowed: boolean; retryAfter: number; distributed: boolean }

export async function rateLimit(namespace: string, identity: string, limit: number, windowSeconds: number): Promise<RateLimitResult> {
  const key = `security:rate:${namespace}:${identity}`
  if (hasDistributedStore()) {
    const count = Number(await redisCommand<number>(['INCR', key]))
    if (count === 1) await redisCommand<number>(['EXPIRE', key, windowSeconds])
    const ttl = Math.max(1, Number(await redisCommand<number>(['TTL', key])))
    return { allowed: count <= limit, retryAfter: ttl, distributed: true }
  }

  if (process.env.NODE_ENV === 'production' && process.env.SECURITY_REQUIRE_DISTRIBUTED_STORE !== 'false') {
    throw new Error('DISTRIBUTED_STORE_REQUIRED')
  }

  const now = Date.now()
  const current = developmentStore.get(key)
  if (!current || current.resetAt <= now) {
    developmentStore.set(key, { count: 1, resetAt: now + windowSeconds * 1000 })
    return { allowed: true, retryAfter: windowSeconds, distributed: false }
  }
  current.count += 1
  return { allowed: current.count <= limit, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)), distributed: false }
}
