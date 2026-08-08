# Production security

## Implemented in code

- Exact, protocol-and-port-aware origin allowlisting protects browser form APIs. Production requests without an `Origin` are rejected. Resend webhooks use provider signatures instead of browser-origin checks.
- Upstash Redis provides distributed rate limiting and idempotency. Keys are versioned and endpoint-namespaced; rate-limit identities are SHA-256 hashed. Rate counter creation and expiry are atomic.
- Production APIs fail closed when Redis is missing or unavailable while `SECURITY_REQUIRE_DISTRIBUTED_STORE=true`. The bounded in-memory fallback is intended only for development.
- Quote and order bodies are limited to 32 KiB. Career multipart requests receive an early 10.5 MiB content-length check, followed by a 10 MiB file limit, allowlisted MIME/extension and file-signature validation.
- Career malware scanning has a centralized adapter boundary in `src/lib/security/malware-scanner.ts`. When scanning is required but unavailable, the file is rejected before email or storage.
- Resend webhook requests use the raw body and Resend SDK signature verification. The `svix-id` is reserved in Redis for seven days to safely acknowledge provider retries without processing a modified replay.
- API responses use generic errors and request IDs. Logs exclude request bodies, contact details, credentials, email bodies, filenames and resume contents.
- Security headers include CSP, HSTS in production, anti-framing, MIME sniffing protection, restrictive referrer and permissions policies, COOP and API `no-store`.

## Rate limits

| Endpoint | Application limit |
| --- | --- |
| `POST /api/request-quote` | 5 per minute per trusted client identity |
| `POST /api/orders` | 5 per 15 minutes per trusted client identity |
| `POST /api/careers/apply` | 3 per 15 minutes per trusted client identity |

Successful idempotency reservations live for 15 minutes. Reservations are released when the email provider rejects a submission so the user can retry. Accepted submissions remain reserved to prevent replay.

## Production environment requirements

- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: server-only Upstash REST credentials.
- `SECURITY_REQUIRE_DISTRIBUTED_STORE=true`: mandatory production setting.
- `ALLOWED_ORIGINS=https://www.bionicsenvirotech.com`: comma-separated exact HTTPS origins. Add each preview origin explicitly. Do not use wildcards, paths or hostname-only values.
- `RESEND_WEBHOOK_SECRET`: endpoint-specific `whsec_...` signing secret from the Resend dashboard.
- `MALWARE_SCANNING_ENABLED=true`: enable only after a scanner adapter is connected and tested. Required-but-unavailable scanning rejects uploads.
- Existing server-only Resend sender and recipient variables documented in `.env.example`.

## Proxy and client-IP boundary

The repository does not establish a single production hosting provider. The code trusts `x-forwarded-for` only when the platform supplies `VERCEL=1`, where Vercel owns the proxy boundary. On another host, set `TRUSTED_PROXY_IP_HEADER` to `cf-connecting-ip`, `fly-client-ip` or `x-real-ip` only after confirming the reverse proxy removes the client-provided header and writes its own value. Without a verified production boundary, the identity is deliberately `unresolved`; this prevents header spoofing but groups requests under one rate-limit identity.

Before launch, verify the selected platform's header behavior with a controlled request containing spoofed forwarding headers. Do not pass client-provided forwarding headers through unchanged.

## External production configuration required

The checked-in `.github/workflows/nextjs.yml` is a GitHub Pages sample. Static Pages hosting cannot provide the dynamic form and webhook routes listed above. Confirm that production is deployed to a supported Next.js server/serverless host, or replace that workflow in a separate deployment task after the actual provider is selected. This audit does not assume that the sample workflow is the live production path.

### WAF and edge limits

Configure the hosting edge/WAF to:

- allow only `POST` for the three form APIs and the Resend webhook;
- cap quote/order request bodies at 32 KiB;
- cap career request bodies at approximately 10.5 MiB and webhook bodies at 256 KiB;
- apply rate limits at least as strict as the application limits;
- challenge or block automated form abuse and repeated resume uploads;
- block malformed methods, headers and obvious exploit signatures;
- alert on sustained 403, 413, 429 and 5xx responses;
- avoid geographic blocking unless the business explicitly approves it.

Application checks remain necessary because edge limits may vary by provider and chunked uploads may reach the runtime before application code can reject them.

### Malware scanner

Select and integrate a malware scanning service or isolated scanner by implementing the `MalwareScanner` interface. Do not send resumes to an unapproved third party. Verify retention, data residency, encryption and deletion terms. Then set `MALWARE_SCANNING_ENABLED=true` and test clean, known-test-signature and unavailable-scanner cases.

### Resend webhook

In the Resend dashboard register:

`https://www.bionicsenvirotech.com/api/webhooks/resend`

Subscribe to sent, delivered, delayed, bounced, failed, complained and suppressed email events. Store the generated signing secret as `RESEND_WEBHOOK_SECRET`. Test signature rejection and a dashboard replay. The endpoint logs only event type, provider email ID, request ID and timing; it is not exposed in the UI.

## Incident response basics

1. Preserve redacted platform, WAF, Redis and email-provider logs.
2. Rotate affected Resend, Redis and webhook credentials immediately.
3. Disable the affected form endpoint at the edge when active abuse cannot be contained by limits.
4. Review request IDs, event types and timestamps without exporting applicant/customer personal data unnecessarily.
5. Notify affected parties and regulators when required by the applicable policy or law.
6. Document cause, containment, recovery and follow-up controls.

## Dependency process

Run `npm audit --omit=dev`, `npm run lint`, `npm run typecheck` and `npm run build` for every dependency update. Review framework advisories and upgrade through a compatible release; never use `npm audit fix --force` without a tested migration. Commit the lockfile with reviewed dependency changes.

## Deployment checklist

Use `docs/PRODUCTION-SECURITY-CHECKLIST.md` for launch sign-off. External controls are not complete merely because the application supports them.
