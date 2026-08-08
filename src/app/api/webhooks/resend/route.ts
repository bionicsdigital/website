import { NextRequest, NextResponse } from 'next/server'
import { Resend, type WebhookEventPayload } from 'resend'
import { exceedsContentLength, logSecurity, logServerError, requestId } from '@/lib/security/request'
import { requestHash, reserveIdempotency, validIdempotencyKey } from '@/lib/security/idempotency'

export const runtime = 'nodejs'

const endpoint = '/api/webhooks/resend'
const observedEvents = new Set([
  'email.sent',
  'email.delivered',
  'email.delivery_delayed',
  'email.bounced',
  'email.failed',
  'email.complained',
  'email.suppressed',
])

export async function POST(request: NextRequest) {
  const started = Date.now()
  const id = requestId(request)
  const headers = { 'x-request-id': id }
  if (exceedsContentLength(request, 256 * 1024)) return NextResponse.json({ message: 'Invalid webhook.' }, { status: 413, headers })

  const secret = process.env.RESEND_WEBHOOK_SECRET
  const svixId = request.headers.get('svix-id')
  const svixTimestamp = request.headers.get('svix-timestamp')
  const svixSignature = request.headers.get('svix-signature')
  if (!secret || !validIdempotencyKey(svixId) || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ message: 'Invalid webhook.' }, { status: 400, headers })
  }
  const eventId = svixId as string

  try {
    const payload = await request.text()
    if (Buffer.byteLength(payload, 'utf8') > 256 * 1024) return NextResponse.json({ message: 'Invalid webhook.' }, { status: 413, headers })
    const resend = new Resend(process.env.RESEND_API_KEY)
    const event = resend.webhooks.verify({
      payload,
      headers: { id: eventId, timestamp: svixTimestamp, signature: svixSignature },
      webhookSecret: secret,
    }) as WebhookEventPayload

    const reservation = await reserveIdempotency('resend-webhook', eventId, requestHash(payload), 7 * 24 * 60 * 60)
    if (!reservation.reserved) {
      if (reservation.duplicate) return NextResponse.json({ ok: true }, { headers })
      return NextResponse.json({ message: 'Invalid webhook.' }, { status: 400, headers })
    }

    const eventType = String(event.type)
    const data = event.data as { email_id?: string }
    logSecurity('resend_webhook', {
      endpoint,
      requestId: id,
      status: observedEvents.has(eventType) ? 'observed' : 'ignored',
      eventType,
      messageId: data.email_id?.slice(0, 100),
      durationMs: Date.now() - started,
    })
    return NextResponse.json({ ok: true }, { headers })
  } catch (error) {
    logServerError(endpoint, id, error, Date.now() - started)
    return NextResponse.json({ message: 'Invalid webhook.' }, { status: 400, headers })
  }
}
