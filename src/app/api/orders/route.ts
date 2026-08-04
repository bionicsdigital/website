import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { products } from "@/components/forms/products-data";

const schema = z.object({
  companyName: z.string().trim().min(2).max(160),
  gstNumber: z
    .string()
    .trim()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/),
  contactPerson: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(8).max(25),
  country: z.string().trim().min(2).max(100),
  state: z.string().trim().min(2).max(100),
  city: z.string().trim().max(100),
  address: z.string().trim().max(500),
  pincode: z.string().trim().max(20),
  product: z.string().trim(),
  quantity: z.number().int().min(1).max(100000),
});
const requests = new Map<string, { count: number; resetAt: number }>();
const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
const money = (value: number) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;
function limited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);
  if (!current || current.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + 15 * 60_000 });
    return false;
  }
  if (current.count >= 5) return true;
  current.count++;
  return false;
}
function rows(items: string[][]) {
  return items
    .map(
      ([label, value], i) =>
        `<tr><td style="width:38%;padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${i % 2 ? "#fff" : "#F8FAFC"};font:700 12px Arial;color:#475569">${escape(label)}</td><td style="padding:12px 14px;border-bottom:1px solid #E5E7EB;background:${i % 2 ? "#fff" : "#F8FAFC"};font:13px/1.6 Arial;color:#0F172A;word-break:break-word">${escape(value || "-")}</td></tr>`,
    )
    .join("");
}
function emailShell(
  title: string,
  intro: string,
  sections: Array<[string, string[][]]>,
) {
  return `<!doctype html><html><body style="margin:0;background:#ECFDF5;padding:20px;font-family:Arial,sans-serif"><table role="presentation" width="100%" style="max-width:650px;margin:auto;border:1px solid #D1FAE5;border-radius:18px;background:#fff;border-collapse:separate;border-spacing:0;overflow:hidden"><tr><td style="padding:24px;background:#047857;color:#fff"><img src="https://www.bionicsenvirotech.com/logo.png" width="170" alt="Bionics Enviro Tech" style="display:block;background:#fff;border-radius:10px;padding:8px"><h1 style="margin:20px 0 6px;font-size:25px">${escape(title)}</h1><p style="margin:0;color:#D1FAE5;font-size:14px">${escape(intro)}</p></td></tr><tr><td style="padding:24px">${sections.map(([heading, items]) => `<table role="presentation" width="100%" style="margin-bottom:18px;border:1px solid #E5E7EB;border-radius:14px;border-collapse:separate;border-spacing:0;overflow:hidden"><tr><td colspan="2" style="padding:13px 14px;background:#F0FDF4;font:bold 15px Arial;color:#065F46">${escape(heading)}</td></tr>${rows(items)}</table>`).join("")}</td></tr><tr><td style="padding:18px 24px;border-top:1px solid #E5E7EB;background:#F8FAFC;text-align:center;font:12px/1.6 Arial;color:#64748B">Bionics Enviro Tech Pvt. Ltd.<br>Generated from the Bionics product-order portal</td></tr></table></body></html>`;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (limited(ip))
    return NextResponse.json(
      { message: "Too many order requests. Please try again later." },
      { status: 429 },
    );
  try {
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success)
      return NextResponse.json(
        { message: "Please check the order details." },
        { status: 400 },
      );
    const data = parsed.data;
    const selected = products.find((item) => item.name === data.product);
    if (!selected)
      return NextResponse.json(
        { message: "Please select a valid product." },
        { status: 400 },
      );
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
    if (!apiKey || !from || !to)
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    const resend = new Resend(apiKey);
    const admin = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New Product Order - ${data.companyName} - ${data.product}`,
      html: emailShell(
        "New Product Order",
        "A customer confirmed an order request on the website.",
        [
          ["Customer Information", contact],
          ["Order & GST Summary", order],
        ],
      ),
    });
    if (admin.error) throw new Error(admin.error.message);
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
    if (reply.error)
      console.error("Order auto-reply failed:", reply.error.message);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "Order submission failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { message: "Unable to place the order right now." },
      { status: 500 },
    );
  }
}
