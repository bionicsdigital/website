# Production security checklist

## Environment and infrastructure

- [ ] Upstash Redis provisioned in the production region
- [ ] `UPSTASH_REDIS_REST_URL` configured as a server-only secret
- [ ] `UPSTASH_REDIS_REST_TOKEN` configured as a server-only secret
- [ ] `SECURITY_REQUIRE_DISTRIBUTED_STORE=true`
- [ ] `ALLOWED_ORIGINS=https://www.bionicsenvirotech.com`
- [ ] Production canonical domain and HTTPS certificate verified
- [ ] Actual Next.js server/serverless deployment provider verified; static GitHub Pages sample is not used for APIs
- [ ] Every required preview/staging origin explicitly listed
- [ ] Hosting proxy client-IP header behavior verified against spoofing
- [ ] WAF public API rules configured
- [ ] Edge body limits configured per route
- [ ] Resume malware scanner integrated and clean/infected/unavailable cases tested
- [ ] `MALWARE_SCANNING_ENABLED=true` after scanner verification
- [ ] Resend webhook registered for delivery events
- [ ] `RESEND_WEBHOOK_SECRET` configured
- [ ] Resend valid signature, invalid signature and replay behavior tested

## Application verification

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] `npm audit --omit=dev` reviewed
- [ ] Production security headers verified from the public URL
- [ ] Quote, order and career rate limits verified across instances
- [ ] Same-payload idempotent replay safely acknowledged
- [ ] Same-key modified-payload replay rejected
- [ ] Redis outage produces generic 503 responses
- [ ] Invalid origin and missing production origin rejected
- [ ] Quote/order oversized bodies rejected
- [ ] Invalid product, quantity, email, phone and GST rejected
- [ ] Career extension, MIME, signature and size validation verified
- [ ] Honeypot submissions produce no email
- [ ] Email-provider failures return generic responses
- [ ] Spoofed forwarded IP headers cannot change the trusted identity
- [ ] No secrets exposed in source, public assets, build output or logs
- [ ] Production error responses contain no stack traces, provider errors or personal data

## Operational readiness

- [ ] WAF and application alert thresholds configured
- [ ] Resend bounce/complaint handling owner assigned
- [ ] Redis and Resend credential rotation procedure tested
- [ ] Security incident owner and escalation contacts documented internally
- [ ] Dependency update cadence assigned
