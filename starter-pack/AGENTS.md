# AGENTS.md

> Universal agent instructions for this project. Read this file at the start of every session. Also symlinked as `CLAUDE.md`.

---

## 1. Project Overview

- **Frontend:** React.js (with Vite), plain CSS + semantic HTML for advanced styling. No CSS-in-JS, no Tailwind unless explicitly requested.
- **Backend / Auth / Database / Storage / Realtime:** Supabase (Postgres + Auth + Storage + Edge Functions).
- **Glue layer:** Node.js (Express or Fastify) only when something cannot be done directly in Supabase Edge Functions.
- **Language:** JavaScript or TypeScript (TypeScript preferred for new files).
- **Package manager:** pnpm (fall back to npm only if pnpm is unavailable).

---

## 2. Mandatory Workflow — Read This Before Doing Anything

Every non-trivial task **must** follow these four phases in order. Do not skip ahead.

### Phase 1 — Plan
1. Restate the user's request in your own words.
2. List the files you intend to create or modify.
3. List the files you need to read first to avoid wrong assumptions.
4. Call out any unknowns, risks, or decisions that need a human call.
5. Estimate scope: small (< 50 lines changed), medium (50–200), large (> 200).

### Phase 2 — Verify the Plan
- **Stop and present the plan to the user. Wait for explicit approval before writing any code.**
- If the user requests changes, revise the plan and re-present it.
- Approval phrases: "approved", "go ahead", "ship it", "yes". Anything else = keep iterating.

### Phase 3 — Execute with Progress Reports
- Work through the plan step by step.
- After each meaningful unit of work (a file written, a test passed, a migration applied), post a short progress report:
  - ✅ what was just completed
  - ⏳ what is next
  - ⚠️ anything unexpected
- Never silently chain 5+ tool calls without a status update.

### Phase 4 — Update Memory
- Before ending the session, update `MEMORY.md` and `PROGRESS.md` (see Section 7).

---

## 3. Permission Gates — When to Stop and Ask

You **must** pause and ask for explicit permission before:

- Installing or removing any dependency
- Modifying `package.json`, `tsconfig.json`, `vite.config.*`, or any other config
- Creating or running database migrations
- Modifying Supabase RLS (Row Level Security) policies
- Changing authentication flows
- Deleting any file
- Refactoring across more than 3 files in a single change
- Modifying `.env*` files or anything secrets-related
- Running anything that touches a remote (push, deploy, publish)
- Changing project structure (creating new top-level folders)

A "permission ask" looks like: *"I'd like to do X because Y. This will affect [files/systems]. Approve?"* Then wait.

---

## 4. Project File Structure

Keep this layout strictly. If a new artifact doesn't fit, ask before creating a new top-level folder.

```
project-root/
├── AGENTS.md              # This file (symlinked to CLAUDE.md)
├── MEMORY.md              # Durable knowledge — see Section 7
├── PROGRESS.md            # Current task state — see Section 7
├── README.md              # Human-facing docs
├── .cursor/
│   └── rules/             # Per-folder agent rules (auto-loaded by Cursor)
├── .env.example           # Template only — never commit real .env
├── package.json
├── tsconfig.json
├── vite.config.ts
│
├── src/                   # FRONTEND (React)
│   ├── main.tsx           # App entry
│   ├── App.tsx
│   ├── components/        # Reusable presentational components (PascalCase folders)
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.css
│   │       └── Button.test.tsx
│   ├── pages/             # Route-level components
│   ├── hooks/             # Custom React hooks (use* prefix)
│   ├── lib/               # Frontend utilities, Supabase client init
│   │   └── supabase.ts
│   ├── styles/            # Global CSS + design tokens
│   │   ├── tokens.css     # CSS custom properties (colors, spacing, type)
│   │   ├── reset.css
│   │   └── global.css
│   └── types/             # Shared TypeScript types
│
├── server/                # NODE.JS BACKEND (only when Supabase Edge Functions aren't enough)
│   ├── index.ts           # Server entry
│   ├── routes/
│   ├── middleware/
│   └── lib/
│
├── supabase/              # SUPABASE PROJECT
│   ├── migrations/        # SQL migrations (timestamped)
│   ├── functions/         # Edge Functions (one folder each)
│   └── seed.sql
│
├── tests/                 # End-to-end and integration tests
│   ├── e2e/
│   └── integration/
│
└── docs/                  # Architecture notes, ADRs, runbooks
    └── adr/               # Architecture Decision Records
```

**Naming conventions:**
- Components: `PascalCase` folder + `PascalCase.tsx` file
- Hooks: `useThing.ts`
- Utilities: `kebab-case.ts`
- CSS files: same name as their component, co-located
- Tests: `*.test.ts(x)` next to the file under test

---

## 5. Coding Standards (the agent enforces; the linter verifies)

### React
- Function components only. No class components.
- One component per file. Default export the component, named export anything else.
- Hooks at the top. No conditional hooks.
- Props typed with TypeScript interfaces named `<Component>Props`.
- No prop drilling beyond 2 levels — lift to context or a hook.

### CSS / HTML
- **Plain CSS only.** Co-locate `<Component>.css` next to `<Component>.tsx`.
- Use **CSS custom properties** from `src/styles/tokens.css` for colors, spacing, font sizes — never hardcode.
- Use **semantic HTML** (`<button>`, `<nav>`, `<main>`, `<article>`) — never a clickable `<div>`.
- Mobile-first media queries.
- BEM-style class naming inside component CSS files: `.button`, `.button__icon`, `.button--primary`.
- Accessibility: every interactive element must be keyboard-reachable and have an accessible name.

### Supabase
- All client access goes through `src/lib/supabase.ts` — never instantiate the client elsewhere.
- Every table must have RLS enabled before being queryable from the client. **Ask permission before changing any RLS policy.**
- Auth state lives in a single `useAuth` hook. No duplicate auth listeners.
- Never expose the service-role key to the frontend. It belongs only in Edge Functions or `server/`.

### Node.js (when used)
- Async/await only. No raw `.then()` chains.
- Every route handler wrapped in error middleware.
- Validate every request body with `zod` before touching it.

---

## 6. Tooling — Top-Notch Linters & Formatters

The following are mandatory. Do **not** modify their configs without permission.

| Tool | Purpose | Config file |
|---|---|---|
| **ESLint** (flat config, v9+) | JS/TS linting | `eslint.config.js` |
| `@typescript-eslint/eslint-plugin` | TS rules | (in eslint config) |
| `eslint-plugin-react` + `react-hooks` + `jsx-a11y` | React + accessibility | (in eslint config) |
| **Prettier** | Formatting | `.prettierrc` |
| **Stylelint** + `stylelint-config-standard` | CSS linting | `.stylelintrc.json` |
| **TypeScript** (`strict: true`) | Type checking | `tsconfig.json` |
| **Vitest** | Unit tests | `vitest.config.ts` |
| **Playwright** | E2E tests | `playwright.config.ts` |
| **Husky** + **lint-staged** | Pre-commit hooks | `.husky/`, `package.json` |
| **commitlint** | Conventional commits | `commitlint.config.js` |

After any code change, mentally simulate `pnpm lint && pnpm typecheck && pnpm test`. If you suspect any of those would fail, fix it before reporting done.

---

## 7. Memory System — How the Agent Learns Across Sessions

You have **two persistent files**. Treat them as your long-term memory.

### `MEMORY.md` — durable knowledge
**Read at the start of every session.** Append (do not rewrite) when you discover something non-obvious. Sections:
- **Architecture decisions** — why we chose X over Y
- **Gotchas** — "the auth refresh token expires after 60 min, so..."
- **Mistakes & corrections** — "I previously assumed X; the user corrected me. Don't repeat."
- **User preferences** — phrasing, formatting, workflow habits the user has called out
- **Domain glossary** — project-specific terms

### `PROGRESS.md` — current task state
**Read at the start of every session. Update before ending every session.** Format:
```
## Current Task
[one sentence]

## Status
- [x] Step 1
- [x] Step 2
- [ ] Step 3 ← in progress
- [ ] Step 4

## Blockers / Open Questions
- ...

## Next Session Should Start By
- ...
```

### Memory rules
- When the user corrects you, write the correction to `MEMORY.md` under "Mistakes & corrections" **in the same response** as the acknowledgement. Do not wait for the end of the session.
- Never put secrets, API keys, or personal data in either file.
- Keep `MEMORY.md` under 300 lines. If it grows beyond that, propose a cleanup (with permission).

---

## 8. Communication Style

- Be concise. Skip filler ("Great question!", "Certainly!").
- When uncertain, say so. Don't invent APIs, library functions, or Supabase features.
- For trade-offs, present 2–3 options with the trade-off named, then recommend one.
- Cite files by path: `src/lib/supabase.ts:42` not "the Supabase file".
- Summarize at the end of every multi-step task with: what changed, what was tested, what the user should verify manually.

---

## 9. Things to Never Do

- Never commit. The user commits.
- Never `git push`, `git rebase`, or `git reset --hard`.
- Never run database migrations against a remote Supabase project without permission.
- Never disable a lint rule to make code pass — fix the code.
- Never add a dependency to "try something out" — propose first.
- Never edit `.env`. Update `.env.example` and tell the user what to set.
- Never silently swallow errors. Log, surface, or rethrow.

---

*Last updated: keep this line current when AGENTS.md itself changes.*
