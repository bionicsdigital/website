import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  escapeHtml,
  sanitizeQuotePayload,
  validateQuotePayload,
  type RequestQuotePayload,
} from '@/lib/request-quote'

const rateLimitWindowMs = 60_000
const maxRequestsPerWindow = 5
const requestMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(key: string) {
  const now = Date.now()
  const current = requestMap.get(key)

  if (!current || current.resetAt < now) {
    requestMap.set(key, { count: 1, resetAt: now + rateLimitWindowMs })
    return false
  }

  if (current.count >= maxRequestsPerWindow) return true

  current.count += 1
  requestMap.set(key, current)
  return false
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#475569;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;background:#f8fafc;width:38%;">${escapeHtml(label)}</td>
      <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;line-height:1.6;">${escapeHtml(value || '-')}</td>
    </tr>
  `
}

function buildEmailHtml(
  payload: RequestQuotePayload,
  submittedDate: string,
  submittedTime: string,
  ipAddress: string,
  userAgent: string
) {
  const fields = [
    ['Plant Type', payload.plantType],
    ['Industry', payload.industry],
    ['Product', payload.product],
    ['Plant Capacity', payload.plantCapacity],
    ['Company Name', payload.companyName],
    ['Contact Person', payload.contactPerson],
    ['Email', payload.email],
    ['Phone', payload.phone],
    ['Country', payload.country],
    ['State', payload.state],
    ['City', payload.city],
    ['Message', payload.additionalRequirements],
    ['Submitted Date', submittedDate],
    ['Submitted Time', submittedTime],
    ['IP Address', ipAddress],
    ['User Agent', userAgent],
  ]

  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#f1f5f9;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;margin:0 auto;border-collapse:collapse;">
          <tr>
            <td style="padding:0;">
              <div style="overflow:hidden;border-radius:24px;background:#ffffff;border:1px solid #dbe5ee;box-shadow:0 24px 70px rgba(15,23,42,.12);">
                <div style="background:linear-gradient(135deg,#006D3A,#00C853,#00E676);padding:26px 28px;color:#ffffff;">
                  <img src="https://www.bionicsenviro.com/logo.png" alt="Bionics Enviro Tech" width="170" style="display:block;width:170px;height:auto;margin-bottom:22px;background:#ffffff;border-radius:14px;padding:10px;" />
                  <p style="margin:0 0 8px;font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#eafff2;">New Quote Request</p>
                  <h1 style="margin:0;font-size:26px;line-height:1.25;color:#ffffff;">Bionics Enviro Tech Website</h1>
                  <p style="margin:10px 0 0;font-size:15px;line-height:1.7;color:#f0fff6;">A customer submitted a new technical quote request.</p>
                </div>

                <div style="padding:28px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
                    ${fields.map(([label, value]) => fieldRow(label, value)).join('')}
                  </table>
                </div>

                <div style="border-top:1px solid #e2e8f0;background:#f8fafc;padding:18px 28px;text-align:center;">
                  <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">Bionics Enviro Tech Website</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  const ipAddress = getClientIp(request)

  if (isRateLimited(ipAddress)) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let body: Partial<RequestQuotePayload>

  try {
    body = (await request.json()) as Partial<RequestQuotePayload>
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const payload = sanitizeQuotePayload(body)
  const errors = validateQuotePayload(payload)

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: 'Please check the form fields.', errors },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.FROM_EMAIL
  const toEmail = process.env.TO_EMAIL

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { ok: false, message: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  const now = new Date()
  const submittedDate = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  })
  const submittedTime = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata',
  })
  const userAgent = request.headers.get('user-agent') || 'Not available'
  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'New Quote Request | Bionics Enviro Tech',
      replyTo: payload.email,
      html: buildEmailHtml(
        payload,
        submittedDate,
        submittedTime,
        ipAddress,
        userAgent
      ),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
