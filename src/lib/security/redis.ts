type RedisResponse<T> = { result?: T; error?: string }

export function hasDistributedStore() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

export async function redisCommand<T>(command: Array<string | number>): Promise<T> {
  const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '')
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) throw new Error('DISTRIBUTED_STORE_NOT_CONFIGURED')

  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
    signal: AbortSignal.timeout(4000),
  })
  if (!response.ok) throw new Error('DISTRIBUTED_STORE_UNAVAILABLE')
  const payload = await response.json() as RedisResponse<T>
  if (payload.error) throw new Error('DISTRIBUTED_STORE_COMMAND_FAILED')
  return payload.result as T
}
