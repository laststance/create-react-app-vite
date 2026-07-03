# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single client-only **Vite + React 19 + TypeScript** SPA starter (no backend, database, or external services). Package manager is **pnpm** (`pnpm@10.25.0`, Node 22.x). Dependencies are refreshed automatically by the startup update script (`pnpm install`), so you do not need to install them manually.

### Services

- **Vite dev server** is the only runtime service. Start it with `pnpm dev` (alias `pnpm start`); it serves on `http://localhost:3000` (`server.host`/`port` set in `vite.config.ts`). This is the sole service needed to exercise the product end to end.
- MSW and Vitest are dev/test-only layers with no real backend behind them.

### Lint / test / build / run

All standard commands are defined in `package.json` `scripts` — use those directly:

- Lint: `pnpm lint` (fix: `pnpm lint:fix`)
- Typecheck: `pnpm typecheck`
- Test: `pnpm test` (Vitest + jsdom; `pnpm test:ui` / `pnpm test:watch` for interactive)
- Build: `pnpm build`
- Dev server: `pnpm dev`
- `pnpm validate` (`scripts/validate`) runs test + lint:fix + typecheck + build concurrently, mirroring the pre-commit hook.

### Gotchas

- `pnpm-workspace.yaml` sets `minimumReleaseAge: 1440` (a 24h supply-chain delay). Newly published dependency versions may be temporarily unavailable to install until they age past that window; this is intentional, not a broken lockfile.
- The pre-commit hook (`.husky/pre-commit` → `lint-staged`) auto-runs Prettier and `eslint --fix` on staged files, so commits can modify staged files.
