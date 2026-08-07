import { NextRequest } from 'next/server'
import { siteConfig } from '@/lib/site'

const localOrigins = new Set(['http://localhost:3000', 'http://127.0.0.1:3000'])

export function requestId(request: NextRequest) {
  const candidate = request.headers.get('x-request-id')
  return candidate && /^[a-zA-Z0-9_-]{8,80}$/.test(candidate) ? candidate : crypto.randomUUID()
}

export function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (!origin) return process.env.NODE_ENV !== 'production'
  const allowed = new Set([siteConfig.url, ...(process.env.ALLOWED_ORIGINS ?? '').split(',').map(value => value.trim()).filter(Boolean)])
  if (process.env.NODE_ENV !== 'production') for (const value of localOrigins) allowed.add(value)
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`)
  return allowed.has(origin)
}

export function getTrustedClientIp(request: NextRequest) {
  if (process.env.VERCEL === '1') {
    return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unresolved'
  }
  const configured = process.env.TRUSTED_PROXY_IP_HEADER?.toLowerCase()
  const allowedHeaders = new Set(['cf-connecting-ip', 'fly-client-ip', 'x-real-ip'])
  if (configured && allowedHeaders.has(configured)) return request.headers.get(configured)?.trim() || 'unresolved'
  if (process.env.NODE_ENV !== 'production') return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'local'
  return 'unresolved'
}

export function exceedsContentLength(request: NextRequest, maximumBytes: number) {
  const header = request.headers.get('content-length')
  if (!header) return false
  const value = Number(header)
  return !Number.isSafeInteger(value) || value < 0 || value > maximumBytes
}

export function logSecurity(event: string, fields: Record<string, string | number | boolean | undefined>) {
  console.info(JSON.stringify({ level: 'info', event, timestamp: new Date().toISOString(), ...fields }))
}

export function logServerError(endpoint: string, id: string, error: unknown, durationMs: number) {
  console.error(JSON.stringify({ level: 'error', event: 'api_error', endpoint, requestId: id, timestamp: new Date().toISOString(), durationMs, errorType: error instanceof Error ? error.name : 'UnknownError' }))
}
