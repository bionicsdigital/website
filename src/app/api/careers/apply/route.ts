import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { careerApplicationSchema, maxResumeSize, resumeTypes } from '@/lib/careers'

const requests = new Map<string, { count: number; resetAt: number }>()
const htmlEscape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')

function limited(ip: string) {
  const now = Date.now(); const current = requests.get(ip)
  if (!current || current.resetAt < now) { requests.set(ip, { count: 1, resetAt: now + 15 * 60_000 }); return false }
  if (current.count >= 3) return true
  current.count += 1; return false
}

function row(label: string, value: string, index: number) {
  return `<tr><td style="width:38%;padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${index % 2 ? '#FFFFFF' : '#F8FAFC'};font:700 12px Arial;color:#334155;vertical-align:top">${htmlEscape(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${index % 2 ? '#FFFFFF' : '#F8FAFC'};font:400 13px/1.6 Arial;color:#0F172A;vertical-align:top;word-break:break-word">${htmlEscape(value || '-')}</td></tr>`
}

function hrEmail(data: Record<string, string>) {
  const fields = [['Name',data.fullName],['Phone',data.mobile],['Email',data.email],['Experience',data.totalExperience],['Relevant Experience',data.relevantExperience],['Qualification',data.qualification],['College',data.college],['Current Company',data.currentCompany],['Current Designation',data.currentDesignation],['Current CTC',data.currentCtc],['Expected CTC',data.expectedCtc],['Notice Period',data.noticePeriod],['City / State / Country',`${data.city}, ${data.state}, ${data.country}`],['LinkedIn',data.linkedinUrl],['Portfolio',data.portfolioUrl]]
  return `<!doctype html><html><body style="margin:0;background:#EFF6FF;padding:20px;font-family:Arial,sans-serif"><table role="presentation" width="100%" style="max-width:650px;margin:auto;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid #DBEAFE;border-radius:18px;background:#fff"><tr><td style="padding:24px;background:#0754B8;background:linear-gradient(135deg,#0F3F8C,#0284C7);color:#fff"><img src="https://www.bionicsenvirotech.com/logo.png" width="170" alt="Bionics Enviro Tech" style="display:block;max-width:100%;height:auto;background:#fff;border-radius:10px;padding:8px"><h1 style="margin:20px 0 6px;font-size:25px">New Job Application Received</h1><p style="margin:0;color:#DBEAFE;font-size:14px">Bionics Careers Portal</p></td></tr><tr><td style="padding:24px"><span style="display:inline-block;padding:8px 12px;border-radius:999px;background:#DBEAFE;color:#1D4ED8;font:bold 12px Arial">${htmlEscape(data.position)}</span><table role="presentation" width="100%" style="margin-top:18px;border:1px solid #E5E7EB;border-radius:14px;border-collapse:separate;border-spacing:0;overflow:hidden">${fields.map((item,index)=>row(item[0],item[1],index)).join('')}</table><div style="margin-top:20px;padding:16px;border-left:4px solid #0284C7;background:#F0F9FF"><h2 style="margin:0 0 8px;font-size:15px;color:#0F172A">Cover Letter</h2><p style="margin:0;white-space:pre-wrap;font:13px/1.7 Arial;color:#334155">${htmlEscape(data.coverLetter || '-')}</p></div></td></tr><tr><td style="padding:18px 24px;border-top:1px solid #E5E7EB;background:#F8FAFC;text-align:center;font:12px/1.6 Arial;color:#64748B">Bionics Enviro Tech Pvt. Ltd.<br>Generated automatically from Bionics Careers Portal</td></tr></table></body></html>`
}

function replyEmail(name: string, position: string) {
  return `<!doctype html><html><body style="margin:0;background:#EFF6FF;padding:20px;font-family:Arial,sans-serif"><table role="presentation" width="100%" style="max-width:600px;margin:auto;border:1px solid #DBEAFE;border-radius:18px;background:#fff;border-collapse:separate;border-spacing:0;overflow:hidden"><tr><td style="padding:22px;background:#0754B8;color:#fff"><img src="https://www.bionicsenvirotech.com/logo.png" width="160" alt="Bionics Enviro Tech" style="display:block;background:#fff;border-radius:9px;padding:7px"><h1 style="margin:18px 0 0;font-size:23px">Application Received</h1></td></tr><tr><td style="padding:26px;font:14px/1.8 Arial;color:#334155"><p>Dear ${htmlEscape(name)},</p><p>Thank you for applying for the position of <strong>${htmlEscape(position)}</strong>.</p><p>We appreciate your interest in joining Bionics Enviro Tech. Our HR team will review your application carefully.</p><p>If your profile matches our requirements, we will contact you shortly.</p><p style="margin-top:24px">Regards,<br><strong>HR Team</strong><br>Bionics Enviro Tech Pvt. Ltd.</p></td></tr></table></body></html>`
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  if (limited(ip)) return NextResponse.json({ message: 'Too many applications. Please try again later.' }, { status: 429 })
  try {
    const form = await request.formData()
    const resume = form.get('resume')
    const raw = Object.fromEntries([...form.entries()].filter(([, value]) => typeof value === 'string')) as Record<string, string>
    const parsed = careerApplicationSchema.safeParse(raw)
    if (!parsed.success) return NextResponse.json({ message: 'Please check the application fields.' }, { status: 400 })
    if (parsed.data.website) return NextResponse.json({ ok: true })
    if (!(resume instanceof File) || !resumeTypes.includes(resume.type) || resume.size > maxResumeSize) return NextResponse.json({ message: 'A PDF, DOC or DOCX resume up to 10 MB is required.' }, { status: 400 })
    const apiKey = process.env.RESEND_API_KEY; const from = process.env.FROM_EMAIL
    if (!apiKey || !from) return NextResponse.json({ message: 'Email service is not configured.' }, { status: 500 })
    const resend = new Resend(apiKey); const data = parsed.data as Record<string, string>; const attachment = Buffer.from(await resume.arrayBuffer())
    const hrResult = await resend.emails.send({ from, to: process.env.CAREERS_EMAIL || 'bionicsenvirotech@gmail.com', replyTo: data.email, subject: `New Career Application - ${data.position} - ${data.fullName}`, html: hrEmail(data), attachments: [{ filename: resume.name.replace(/[^a-zA-Z0-9._-]/g, '_'), content: attachment }] })
    if (hrResult.error) throw new Error(hrResult.error.message)
    const replyResult = await resend.emails.send({ from, to: data.email, subject: 'Application Received | Bionics Enviro Tech', html: replyEmail(data.fullName, data.position) })
    if (replyResult.error) console.error('Career auto-reply failed:', replyResult.error.message)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Career application failed:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json({ message: 'Unable to submit the application right now.' }, { status: 500 })
  }
}
