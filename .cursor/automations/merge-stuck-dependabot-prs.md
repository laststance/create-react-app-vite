# Automation: Merge stuck Dependabot PRs

Use this spec to create a **Cursor Cloud Agent Automation** at
[cursor.com/automations/new](https://cursor.com/automations/new).

## UI settings

| Setting         | Value                                                              |
| --------------- | ------------------------------------------------------------------ |
| **Name**        | Merge stuck Dependabot PRs                                         |
| **Trigger**     | Scheduled → Custom cron: `0 1 * * *` (daily 10:00 JST / 01:00 UTC) |
| **Repository**  | `laststance/create-react-app-vite` → branch `main`                 |
| **Model**       | Composer 2.5 (or latest available)                                 |
| **Permissions** | Private (or Team Owned if shared)                                  |

### Tools to enable

- **Pull request creation** (default on)
- **Comment on pull request** (optional — for skip/failure summaries)

## Instructions (paste into the automation prompt)

```text
Daily Dependabot PR sweep for this repository.

## Goal

Find open Dependabot pull requests that are stuck and merge their dependency
updates onto current main — the same workflow used when PRs pile up with merge
conflicts.

## Step 1 — Discover stuck PRs

List open pull requests authored by `dependabot[bot]` (or with the
`dependencies` label if present).

Treat a PR as **stuck** when ANY of these is true:

- `mergeable` is `CONFLICTING` or `mergeStateStatus` is `DIRTY`
- The PR has been open for 3+ days with no merge
- Required checks are green but the PR is still open and not auto-merging

If no stuck Dependabot PRs exist, reply with a one-line summary and stop.

## Step 2 — Try direct merge first

For each stuck PR that is mergeable (no conflicts):

1. Ensure CI would pass — run `pnpm validate` on a branch that includes the PR changes.
2. Merge with `gh pr merge <number> --merge --admin`.
3. Record the result.

Skip to Step 4 for PRs handled here.

## Step 3 — Resolve conflicted Dependabot PRs (bulk merge)

When multiple Dependabot PRs conflict with each other or with `main`:

1. Check out `main` and pull latest.
2. Create a branch: `cursor/merge-dependabot-prs-<short-hash>`.
3. Apply every pending version bump from the stuck PRs to `package.json` on
   current `main` (do NOT cherry-pick old Dependabot commits — they may be
   based on stale `main`).
4. If `react` is bumped, also bump `react-dom` to the same semver range so
   React versions stay aligned (mismatch fails tests).
5. Run `pnpm install` to refresh `pnpm-lock.yaml`.
6. Run `pnpm validate` (test + lint:fix + typecheck + build). All must pass.
7. Commit, push, open a PR titled
   `chore(deps): merge stuck Dependabot dependency updates` and reference the
   superseded PR numbers in the body.
8. Merge that PR into `main` with `gh pr merge --merge --admin`.
9. For each original Dependabot branch, run:
   `git push origin main:refs/heads/<dependabot-branch> --force-with-lease`
   so GitHub auto-closes the obsolete PRs.

## Step 4 — Report

Post a short summary (as the agent result / PR comment if enabled):

- PRs merged directly
- PRs consolidated via bulk merge PR (with link)
- PRs skipped (with reason: failing tests, major breaking bump, etc.)
- Confirm zero open Dependabot PRs remain, or list any still blocked

## Repository constraints (from AGENTS.md)

- Package manager: `pnpm` only
- Validation command: `pnpm validate`
- Do not skip lockfile updates
- `pnpm-workspace.yaml` has `minimumReleaseAge: 1440` — if install fails for
  a brand-new package, note it and skip that bump rather than forcing it

## Safety rules

- Do NOT merge if `pnpm validate` fails.
- Do NOT force-merge major-version bumps without checking release notes for
  breaking changes.
- Prefer one consolidated PR over merging conflicted Dependabot branches
  individually.
- Always work on current `main`, not stale Dependabot branch bases.
```

## After creating the automation

1. Open [cursor.com/automations](https://cursor.com/automations) and confirm
   the automation is **Active**.
2. Use **Run now** once to verify it behaves as expected.
3. Adjust the cron time in the UI if 10:00 JST does not suit your schedule.
