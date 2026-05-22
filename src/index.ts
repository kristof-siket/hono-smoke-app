import { Hono } from "hono";
import { serve } from "bun";

const app = new Hono();

app.get("/", (c) =>
  c.json({
    ok: true,
    service: "hono-smoke-app",
    timestamp: new Date().toISOString(),
  }),
);

app.get("/health", (c) => c.json({ ok: true }));

const port = Number(process.env["PORT"] ?? 3000);

serve({
  fetch: app.fetch,
  port,
});

console.log(`hono-smoke-app listening on :${port}`);

// smoke trigger 2026-05-22T12:46:13Z

// smoke trigger 2026-05-22T12:46:56Z

// smoke trigger 2026-05-22T12:51:08Z
