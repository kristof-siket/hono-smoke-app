# Hono Smoke App

Small Hono service used to verify a generic Bun HTTP deployment flow.

## Routes

- `GET /health` returns `{ "ok": true }`
- `GET /` returns a JSON payload with the service name and timestamp
// demo 2026-05-27T13:59:15+02:00
// direct main push from demo 2026-05-27T14:04:13+02:00