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
