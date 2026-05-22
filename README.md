# Hono Smoke App

Small Hono service used to verify a generic Bun HTTP deployment flow.

## Routes

- `GET /health` returns `{ "ok": true }`
- `GET /` returns a JSON payload with the service name and timestamp
