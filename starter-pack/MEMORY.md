# MEMORY.md

> Durable knowledge the agent has accumulated across sessions. Read at the start of every session. Append (don't rewrite) when something non-obvious comes up. Keep under 300 lines.

---

## Architecture decisions
<!-- Why we picked X over Y. Example:
- 2026-05-02: Chose Vite over Next.js because we need a pure SPA and don't want SSR complexity.
-->

## Gotchas
<!-- Non-obvious behaviors, library quirks, env-specific issues. Example:
- 2026-05-02: Supabase auth refresh token rotates on every refresh; can't reuse old tokens after a refresh call.
-->

## Mistakes & corrections
<!-- Things the agent got wrong that the user corrected. Don't repeat. Example:
- 2026-05-02: I assumed `supabase.auth.user()` exists; it doesn't in v2. Use `supabase.auth.getUser()` instead.
-->

## User preferences
<!-- How the user likes things done. Example:
- 2026-05-02: User prefers concise responses, no preamble, code first then explanation.
-->

## Domain glossary
<!-- Project-specific terms. Example:
- "Wrap" = the annual end-of-year summary feature.
-->
