import { createHash } from 'node:crypto'
import { hasDistributedStore, redisCommand } from './redis'

const developmentKeys = new Map<string, { hash: string; expires: number }>()

export function validIdempotencyKey(value: string | null) {
  return Boolean(value && /^[a-zA-Z0-9_-]{16,100}$/.test(value))
}

export function requestHash(value: unknown) {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex')
}

export async function reserveIdempotency(namespace: string, key: string, hash: string, ttlSeconds = 900) {
  const storageKey = `security:idempotency:v1:${namespace}:${key}`
  if (hasDistributedStore()) {
    const result = await redisCommand<'OK' | null>(['SET', storageKey, hash, 'NX', 'EX', ttlSeconds])
    if (result === 'OK') return { reserved: true, duplicate: false, distributed: true }
    const existing = await redisCommand<string | null>(['GET', storageKey])
    return { reserved: false, duplicate: existing === hash, distributed: true }
  }
  if (process.env.NODE_ENV === 'production' && process.env.SECURITY_REQUIRE_DISTRIBUTED_STORE !== 'false') throw new Error('DISTRIBUTED_STORE_REQUIRED')
  const now = Date.now(); const existing = developmentKeys.get(storageKey)
  if (existing && existing.expires > now) return { reserved: false, duplicate: existing.hash === hash, distributed: false }
  developmentKeys.set(storageKey, { hash, expires: now + ttlSeconds * 1000 })
  return { reserved: true, duplicate: false, distributed: false }
}

export async function releaseIdempotency(namespace: string, key: string) {
  const storageKey = `security:idempotency:v1:${namespace}:${key}`
  if (hasDistributedStore()) await redisCommand<number>(['DEL', storageKey])
  else developmentKeys.delete(storageKey)
}
