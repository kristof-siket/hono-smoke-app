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

// smoke trigger 2026-05-22T12:54:19Z

// smoke trigger 2026-05-22T12:58:34Z

// smoke trigger 2026-05-22T13:03:19Z

// smoke trigger after e2b template redeploy 2026-05-22T13:18:10Z

// smoke retry 2026-05-22T13:20:09Z

// smoke trigger after template env fix 2026-05-22T13:29:25Z

// smoke trigger after promotion retry merge 2026-05-22T14:05:41Z

// smoke trigger without keepalive 2026-05-22T14:08:46Z

// smoke trigger after PTL-1516 async build-runner merge 2026-05-26T15:23:40Z

// smoke trigger 2 2026-05-26T15:25:27Z

// smoke trigger after e2b template republish 2026-05-26T15:40:28Z

// smoke retry 2026-05-26T15:42:19Z

// smoke after postFinalize.ts COPY fix 15:46:58Z

// smoke after .ts ext fix 15:55:03Z

// smoke: verify kill-on-finalize after #3969 + template republish 17:20:41Z

// load-2 at 17:23:49Z

// load2-2 at 07:14:49Z

// ld1-2 at 07:19:10Z
