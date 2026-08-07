import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  escapeHtml,
  quoteRequestSchema,
  type RequestQuotePayload,
} from '@/lib/request-quote'
import { rateLimit } from '@/lib/security/rate-limit'
import { releaseIdempotency, requestHash, reserveIdempotency, validIdempotencyKey } from '@/lib/security/idempotency'
import { exceedsContentLength, getTrustedClientIp, isAllowedOrigin, logSecurity, logServerError, requestId } from '@/lib/security/request'

function fieldRow(label: string, value: string, index: number) {
  return `
    <tr>
      <td style="width:38%;padding:14px 16px;border-bottom:1px solid #E5E7EB;background:${index % 2 === 0 ? '#F9FAFB' : '#FFFFFF'};color:#374151;font-size:13px;line-height:1.5;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;border-bottom:1px solid #E5E7EB;background:${index % 2 === 0 ? '#F9FAFB' : '#FFFFFF'};color:#111827;font-size:14px;line-height:1.6;font-weight:400;vertical-align:top;word-break:break-word;">${escapeHtml(value || '-')}</td>
    </tr>
  `
}

function detailsCard(title: string, fields: string[][]) {
  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;margin:0 0 22px;border-collapse:separate;border-spacing:0;border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;background:#FFFFFF;">
      <tr>
        <td colspan="2" style="padding:15px 16px;border-bottom:1px solid #E5E7EB;background:#FFFFFF;color:#111827;font-size:16px;line-height:1.4;font-weight:700;">${escapeHtml(title)}</td>
      </tr>
      ${fields.map(([label, value], index) => fieldRow(label, value, index)).join('')}
    </table>
  `
}

function badge(label: string, value: string, color: string) {
  return `<span style="display:inline-block;margin:0 7px 8px 0;padding:7px 11px;border-radius:999px;background:${color};color:#FFFFFF;font-size:12px;line-height:1.3;font-weight:700;">${escapeHtml(label)}: ${escapeHtml(value || '-')}</span>`
}

function buildEmailHtml(payload: RequestQuotePayload) {
  const projectFields = [
    ['Plant Type', payload.plantType],
    ['Industry', payload.industry],
    ['Product', payload.product],
    ['Plant Capacity', payload.plantCapacity],
  ]
  const contactFields = [
    ['Company Name', payload.companyName],
    ['Contact Person', payload.contactPerson],
    ['Email', payload.email],
    ['Phone Number', payload.phone],
    ['Country', payload.country],
    ['State', payload.state],
    ['City', payload.city],
  ]
  const requirementFields = [['Message', payload.additionalRequirements]]
  const safeEmail = escapeHtml(payload.email)
  const safePhone = escapeHtml(payload.phone)

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:0;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;color:#111827;-webkit-text-size-adjust:100%;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#F3F4F6;">
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table role="presentation" width="650" cellspacing="0" cellpadding="0" style="width:100%;max-width:650px;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid #E5E7EB;border-radius:20px;background:#FFFFFF;">
                <tr>
                  <td style="padding:24px;background:#00C853;color:#FFFFFF;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                      <tr>
                        <td style="vertical-align:middle;">
                          <img src="https://www.bionicsenvirotech.com/logo.png" alt="BIONICS ENVIRO TECH — Scientific Manufacturer of Nanozyme Bioculture" width="170" style="display:block;width:170px;max-width:100%;height:auto;margin:0 0 12px;border:0;background:#FFFFFF;border-radius:10px;padding:8px;" />
                          <p style="margin:0;color:#FFFFFF;font-size:16px;line-height:1.3;font-weight:800;">BIONICS ENVIRO TECH</p>
                          <p style="margin:3px 0 0;color:#E9FFF1;font-size:12px;line-height:1.4;">Scientific Manufacturer of Nanozyme Bioculture</p>
                        </td>
                      </tr>
                    </table>
                    <h1 style="margin:22px 0 0;color:#FFFFFF;font-size:28px;line-height:1.2;font-weight:800;">New Quote Request</h1>
                    <p style="margin:8px 0 0;color:#F0FFF4;font-size:15px;line-height:1.6;">A new quotation request has been submitted from the website.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px;">
                    <div style="margin:0 0 16px;">
                      ${badge('Industry', payload.industry, '#047857')}
                      ${badge('Product', payload.product, '#0F766E')}
                      ${badge('Phone', payload.phone, '#2563EB')}
                    </div>

                    ${detailsCard('Project Details', projectFields)}
                    ${detailsCard('Contact Information', contactFields)}
                    ${detailsCard('Requirement', requirementFields)}

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;margin-top:4px;">
                      <tr>
                        <td style="padding:0 8px 8px 0;vertical-align:top;">
                          <a href="mailto:${safeEmail}" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#00A844;color:#FFFFFF;font-size:14px;line-height:1.2;font-weight:700;text-decoration:none;">Reply via Email</a>
                        </td>
                        <td style="padding:0 0 8px 8px;vertical-align:top;text-align:right;">
                          <a href="tel:${safePhone}" style="display:inline-block;padding:13px 20px;border-radius:10px;background:#2563EB;color:#FFFFFF;font-size:14px;line-height:1.2;font-weight:700;text-decoration:none;">Call Customer</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-top:1px solid #E5E7EB;background:#F9FAFB;text-align:center;">
                    <p style="margin:0;color:#111827;font-size:14px;line-height:1.5;font-weight:700;">Bionics Enviro Tech Pvt. Ltd.</p>
                    <p style="margin:4px 0 12px;color:#6B7280;font-size:12px;line-height:1.5;">Scientific Manufacturer of Nanozyme Bioculture</p>
                    <p style="margin:0;color:#4B5563;font-size:12px;line-height:1.7;">
                      <a href="https://www.bionicsenvirotech.com" style="color:#047857;text-decoration:none;">www.bionicsenvirotech.com</a><br />
                      <a href="mailto:bionicsenvirotech@gmail.com" style="color:#047857;text-decoration:none;">bionicsenvirotech@gmail.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  const started = Date.now()
  const id = requestId(request)
  const endpoint = '/api/request-quote'
  const responseHeaders = { 'x-request-id': id }
  if (!isAllowedOrigin(request)) return NextResponse.json({ ok: false, message: 'Request not allowed.' }, { status: 403, headers: responseHeaders })
  if (exceedsContentLength(request, 32 * 1024)) return NextResponse.json({ ok: false, message: 'Request is too large.' }, { status: 413, headers: responseHeaders })
  const idempotencyKey = request.headers.get('idempotency-key')
  if (!validIdempotencyKey(idempotencyKey)) return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400, headers: responseHeaders })
  try {
    const limit = await rateLimit('quote', getTrustedClientIp(request), 5, 60)
    if (!limit.allowed) {
      logSecurity('rate_limit', { endpoint, requestId: id, status: 429 })
      return NextResponse.json({ ok: false, message: 'Too many requests. Please try again later.' }, { status: 429, headers: { ...responseHeaders, 'Retry-After': String(limit.retryAfter) } })
    }
  } catch (error) {
    logServerError(endpoint, id, error, Date.now() - started)
    return NextResponse.json({ ok: false, message: 'Service temporarily unavailable.' }, { status: 503, headers: responseHeaders })
  }
  let raw: unknown
  try { raw = await request.json() } catch { return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400, headers: responseHeaders }) }
  const parsed = quoteRequestSchema.safeParse(raw)
  if (!parsed.success) {
    logSecurity('validation_failure', { endpoint, requestId: id, status: 400, issueCount: parsed.error.issues.length })
    return NextResponse.json({ ok: false, message: 'Please check the form fields.' }, { status: 400, headers: responseHeaders })
  }
  if (parsed.data.website) return NextResponse.json({ ok: true }, { headers: responseHeaders })
  const payload = parsed.data
  try {
    const reservation = await reserveIdempotency('quote', idempotencyKey!, requestHash(payload))
    if (!reservation.reserved) return reservation.duplicate
      ? NextResponse.json({ ok: true, duplicate: true }, { headers: responseHeaders })
      : NextResponse.json({ ok: false, message: 'Idempotency key conflict.' }, { status: 409, headers: responseHeaders })
  } catch (error) {
    logServerError(endpoint, id, error, Date.now() - started)
    return NextResponse.json({ ok: false, message: 'Service temporarily unavailable.' }, { status: 503, headers: responseHeaders })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.FROM_EMAIL
  const toEmail = process.env.TO_EMAIL

  if (!apiKey || !fromEmail || !toEmail) {
    await releaseIdempotency('quote', idempotencyKey!).catch(() => undefined)
    return NextResponse.json(
      { ok: false, message: 'Email service is not configured.' },
      { status: 500, headers: responseHeaders }
    )
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Quote Request | ${payload.companyName.replace(/[\r\n]/g, ' ')} | ${payload.industry}`,
      replyTo: payload.email,
      html: buildEmailHtml(payload),
    })

    logSecurity('email_attempt', { endpoint, requestId: id, status: 'accepted', durationMs: Date.now() - started })
    return NextResponse.json({ ok: true }, { headers: responseHeaders })
  } catch (error) {
    await releaseIdempotency('quote', idempotencyKey!).catch(() => undefined)
    logServerError(endpoint, id, error, Date.now() - started)
    return NextResponse.json(
      { ok: false, message: 'Something went wrong. Please try again.' },
      { status: 500, headers: responseHeaders }
    )
  }
}
