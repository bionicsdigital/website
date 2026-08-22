import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { products } from "@/components/forms/products-data";
import { siteConfig } from "@/lib/site";
import { rateLimit } from "@/lib/security/rate-limit";
import {
  releaseIdempotency,
  requestHash,
  reserveIdempotency,
  validIdempotencyKey,
} from "@/lib/security/idempotency";
import {
  exceedsContentLength,
  getTrustedClientIp,
  isAllowedOrigin,
  logSecurity,
  logServerError,
  requestId,
} from "@/lib/security/request";
import { internalInquiryRecipients } from "@/lib/email-recipients";

const productNames = products.map((item) => item.name);
const schema = z
  .object({
    companyName: z.string().trim().min(2).max(160),
    gstNumber: z
      .string()
      .trim()
      .toUpperCase()
      .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/),
    contactPerson: z.string().trim().min(2).max(120),
    email: z
      .string()
      .trim()
      .email()
      .max(160)
      .transform((value) => value.toLowerCase()),
    phone: z
      .string()
      .trim()
      .min(8)
      .max(25)
      .refine((value) => isValidPhoneNumber(value), "Invalid phone"),
    country: z.string().trim().min(2).max(100),
    state: z.string().trim().min(2).max(100),
    city: z.string().trim().max(100),
    address: z.string().trim().max(500),
    pincode: z.string().trim().max(20),
    product: z
      .string()
      .refine((value) => productNames.includes(value), "Invalid product"),
    quantity: z.number().finite().int().min(1).max(100000),
    unitPrice: z.number().finite().optional(),
    website: z.string().max(0).optional(),
  })
  .strict();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
const money = (value: number) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;
const safeSubject = (value: string) =>
  value.replace(/[\r\n]/g, " ").slice(0, 160);
function rows(items: string[][]) {
  return items
    .map(
      ([label, value], index) =>
        `<tr><td style="width:38%;padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${index % 2 ? "#fff" : "#F8FAFC"};font:700 12px Arial;color:#475569">${escapeHtml(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${index % 2 ? "#fff" : "#F8FAFC"};font:13px/1.6 Arial;color:#0F172A;word-break:break-word">${escapeHtml(value || "-")}</td></tr>`,
    )
    .join("");
}
function emailShell(
  title: string,
  intro: string,
  sections: Array<[string, string[][]]>,
) {
  return `<!doctype html><html><body style="margin:0;background:#ECFDF5;padding:20px;font-family:Arial,sans-serif"><table role="presentation" width="100%" style="max-width:650px;margin:auto;border:1px solid #D1FAE5;border-radius:18px;background:#fff;border-collapse:separate;border-spacing:0;overflow:hidden"><tr><td style="padding:24px;background:#047857;color:#fff"><img src="${siteConfig.url}${siteConfig.logo}" width="170" alt="${escapeHtml(siteConfig.shortName)}" style="display:block;background:#fff;border-radius:10px;padding:8px"><h1 style="margin:20px 0 6px;font-size:25px">${escapeHtml(title)}</h1><p style="margin:0;color:#D1FAE5;font-size:14px">${escapeHtml(intro)}</p></td></tr><tr><td style="padding:24px">${sections.map(([heading, items]) => `<table role="presentation" width="100%" style="margin-bottom:18px;border:1px solid #E5E7EB;border-radius:14px;border-collapse:separate;border-spacing:0;overflow:hidden"><tr><td colspan="2" style="padding:13px 14px;background:#F0FDF4;font:bold 15px Arial;color:#065F46">${escapeHtml(heading)}</td></tr>${rows(items)}</table>`).join("")}</td></tr><tr><td style="padding:18px 24px;border-top:1px solid #E5E7EB;background:#F8FAFC;text-align:center;font:12px/1.6 Arial;color:#64748B">${escapeHtml(siteConfig.name)}<br>Generated from the product-order portal</td></tr></table></body></html>`;
}

export async function POST(request: NextRequest) {
  const started = Date.now();
  const id = requestId(request);
  const endpoint = "/api/orders";
  const headers = { "x-request-id": id };
  if (!isAllowedOrigin(request))
    return NextResponse.json(
      { message: "Request not allowed." },
      { status: 403, headers },
    );
  if (exceedsContentLength(request, 32 * 1024))
    return NextResponse.json(
      { message: "Request is too large." },
      { status: 413, headers },
    );
  const key = request.headers.get("idempotency-key");
  if (!validIdempotencyKey(key))
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400, headers },
    );
  try {
    const limit = await rateLimit(
      "orders",
      getTrustedClientIp(request),
      5,
      15 * 60,
    );
    if (!limit.allowed) {
      logSecurity("rate_limit", { endpoint, requestId: id, status: 429 });
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { ...headers, "Retry-After": String(limit.retryAfter) },
        },
      );
    }
  } catch (error) {
    logServerError(endpoint, id, error, Date.now() - started);
    return NextResponse.json(
      { message: "Service temporarily unavailable." },
      { status: 503, headers },
    );
  }
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400, headers },
    );
  }
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    logSecurity("validation_failure", {
      endpoint,
      requestId: id,
      status: 400,
      issueCount: parsed.error.issues.length,
    });
    return NextResponse.json(
      { message: "Please check the order details." },
      { status: 400, headers },
    );
  }
  if (parsed.data.website) return NextResponse.json({ ok: true }, { headers });
  const data = parsed.data;
  const selected = products.find((item) => item.name === data.product)!;
  const authoritative = {
    ...data,
    unitPrice: undefined,
    authoritativePrice: selected.price,
  };
  try {
    const reservation = await reserveIdempotency(
      "orders",
      key!,
      requestHash(authoritative),
    );
    if (!reservation.reserved)
      return reservation.duplicate
        ? NextResponse.json({ ok: true, duplicate: true }, { headers })
        : NextResponse.json(
            { message: "Idempotency key conflict." },
            { status: 409, headers },
          );
  } catch (error) {
    logServerError(endpoint, id, error, Date.now() - started);
    return NextResponse.json(
      { message: "Service temporarily unavailable." },
      { status: 503, headers },
    );
  }

  const subtotal = selected.price * data.quantity;
  const local = data.country === "India" && data.state === "Tamil Nadu";
  const cgst = local ? subtotal * 0.025 : 0;
  const sgst = local ? subtotal * 0.025 : 0;
  const igst = local ? 0 : subtotal * 0.05;
  const total = subtotal + cgst + sgst + igst;
  const contact = [
    ["Company", data.companyName],
    ["GST Number", data.gstNumber],
    ["Contact Person", data.contactPerson],
    ["Email", data.email],
    ["Phone", data.phone],
    [
      "Address",
      [data.address, data.city, data.state, data.pincode, data.country]
        .filter(Boolean)
        .join(", "),
    ],
  ];
  const order = [
    ["Product", data.product],
    ["Unit Price", money(selected.price)],
    ["Quantity", String(data.quantity)],
    ["Subtotal", money(subtotal)],
    ...(local
      ? [
          ["CGST 2.5%", money(cgst)],
          ["SGST 2.5%", money(sgst)],
        ]
      : [["IGST 5%", money(igst)]]),
    ["Grand Total", money(total)],
  ];
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  const to = process.env.ORDERS_EMAIL || process.env.TO_EMAIL;
  if (!apiKey || !from) {
    await releaseIdempotency("orders", key!).catch(() => undefined);
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500, headers },
    );
  }
  try {
    const resend = new Resend(apiKey);
    const admin = await resend.emails.send({
      from,
      to: internalInquiryRecipients(to),
      replyTo: data.email,
      subject: safeSubject(
        `New Product Order - ${data.companyName} - ${data.product}`,
      ),
      html: emailShell(
        "New Product Order",
        "A customer confirmed an order request on the website.",
        [
          ["Customer Information", contact],
          ["Order & GST Summary", order],
        ],
      ),
    });
    if (admin.error) throw new Error("EMAIL_PROVIDER_REJECTED");
    const reply = await resend.emails.send({
      from,
      to: data.email,
      subject: "Order Request Received | Bionics Enviro Tech",
      html: emailShell(
        "Order Request Received",
        `Dear ${data.contactPerson}, thank you. Our team will verify the order and contact you with the next steps.`,
        [
          ["Order Summary", order],
          [
            "Buyer",
            [
              ["Company", data.companyName],
              ["Contact Person", data.contactPerson],
            ],
          ],
        ],
      ),
    });
    logSecurity("email_attempt", {
      endpoint,
      requestId: id,
      status: reply.error ? "admin_accepted_reply_failed" : "accepted",
      durationMs: Date.now() - started,
    });
    return NextResponse.json({ ok: true }, { headers });
  } catch (error) {
    await releaseIdempotency("orders", key!).catch(() => undefined);
    logServerError(endpoint, id, error, Date.now() - started);
    return NextResponse.json(
      { message: "Unable to place the order right now." },
      { status: 500, headers },
    );
  }
}
