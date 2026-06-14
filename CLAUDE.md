# CLAUDE.md — moltworker

## What this is

A Cloudflare Worker that runs [OpenClaw](https://github.com/openclaw/openclaw)
(formerly Moltbot/Clawdbot) — a personal AI assistant — inside a
[Cloudflare Sandbox](https://developers.cloudflare.com/sandbox/) container. The
Worker proxies to the OpenClaw gateway (web UI + WebSocket), serves an admin UI
at `/_admin/`, and exposes `/api/*` (device pairing) and `/debug/*` endpoints.

> Experimental proof of concept. Requires the Workers **Paid** plan ($5/mo) for
> Sandbox containers.

**Cloudflare error 7003** is an error *code* ("Could not route to
workers/services"), **not a port**. It means the account lacks Containers
entitlement (e.g. on the Free plan). See README.md for the support-ticket path.

## Stack

- TypeScript + [Hono](https://hono.dev/) (Worker), React 19 admin UI (Vite)
- Cloudflare Sandbox / Durable Objects / Browser Rendering / R2 (optional)
- Build: Vite; deploy: Wrangler. Lint/format: oxlint / oxfmt. Tests: Vitest.

## Commands

```bash
npm run dev        # vite dev
npm run start      # wrangler dev
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # oxlint src/
npm run format:check  # oxfmt --check src/
npm run deploy     # build + wrangler deploy
```

CI (`.github/workflows/test.yml`) runs lint, format check, typecheck, unit tests
(`unit` job) and E2E (`e2e` job). A `unit`-job failure pings Slack via
`notify-failure`; `e2e` is excluded from the notify since it depends on
Cloudflare/R2 deploy secrets and is environment-sensitive.

## Key files

- `src/index.ts` — main Hono app, route mounting.
- `src/types.ts` — `MoltbotEnv` and type defs; `src/config.ts` — ports/timeouts/paths.
- `src/auth/` — Cloudflare Access JWT/JWKS middleware.
- `src/gateway/` — OpenClaw process lifecycle, env building, R2 mount/sync.
- `src/routes/` — `api.ts`, `admin.ts`, `debug.ts`.
- `src/client/` — React admin UI.
- `wrangler.jsonc` — Worker/container/bindings config; `Dockerfile` — sandbox image.

## More detail

See **AGENTS.md** for the full architecture, patterns, env vars, and
troubleshooting playbook.
