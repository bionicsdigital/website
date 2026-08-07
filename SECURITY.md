# Production security configuration

## Required infrastructure

- Configure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for distributed rate limiting and idempotency. Production mutation APIs fail closed without this store unless `SECURITY_REQUIRE_DISTRIBUTED_STORE=false` is explicitly set.
- Vercel deployments trust the platform-overwritten `x-forwarded-for` value when `VERCEL=1`. On another host, configure `TRUSTED_PROXY_IP_HEADER` only after the named header is overwritten at a trusted reverse proxy. Never forward a client-supplied value unchanged.
- Enforce an upload/body limit at the hosting proxy. The career route performs an early `Content-Length` check and a 10 MB file check, but application code cannot guarantee rejection before a chunked multipart body reaches the runtime.
- Malware scanning requires production infrastructure integration. Extension, MIME and magic-byte validation are not malware scanning.
- Configure Resend delivery, bounce and complaint webhooks in production. Webhook signature verification is not implemented until the chosen webhook endpoint and signing configuration are provisioned.

## CSP

The CSP blocks framing, plugins, third-party scripts, third-party connections and unapproved media. `unsafe-inline` remains in `script-src` because the statically rendered Next.js application and JSON-LD currently emit inline scripts; `unsafe-eval` is not allowed. Moving to request-scoped CSP nonces would require dynamic rendering/middleware and is a future hardening step. Inline styles remain allowed because React animation components set style attributes.

## Logging

API logs contain correlation ID, endpoint, event, status, duration and validation issue count/type. They do not contain request bodies, names, phone numbers, email addresses, GST values, resume filenames/content, email bodies or secrets.
