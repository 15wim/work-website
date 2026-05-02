# Agent Starter Pack — How to Use

This starter pack gives Cursor (and any other agent that respects `AGENTS.md`) a complete operating manual for a React + Supabase + Node.js project.

## What's included

```
.
├── AGENTS.md              # The master instructions — read by all agents
├── MEMORY.md              # Long-term memory (corrections, decisions, gotchas)
├── PROGRESS.md            # Current task state across sessions
└── .cursor/
    └── rules/
        ├── 000-root.mdc        # Always-on: workflow, permissions, hard rules
        ├── 100-react.mdc       # Auto-loads when editing src/ React files
        ├── 200-css-html.mdc    # Auto-loads when editing CSS/HTML
        ├── 300-supabase.mdc    # Auto-loads when editing Supabase code
        ├── 400-node-server.mdc # Auto-loads when editing server/
        ├── 500-testing.mdc     # Auto-loads when editing test files
        ├── 600-memory.mdc      # Always-on: memory maintenance rules
        └── 700-linting.mdc     # Auto-loads for code/config files
```

## Setup steps for a new project

1. **Drop these files into your project root.** All seven `.mdc` files go in `.cursor/rules/`.

2. **Symlink so other agents see the same rules:**
   ```bash
   ln -s AGENTS.md CLAUDE.md
   ```
   (On Linux Mint: `cd` into your project root first.)

3. **Open the project in Cursor.** Cursor auto-loads:
   - All rules with `alwaysApply: true` on every request
   - Rules whose `globs:` match the file you're currently working on
   - `AGENTS.md` is loaded by Cursor's agent automatically as project context

4. **First message to the agent in a new project:**
   > "Read AGENTS.md, MEMORY.md, and PROGRESS.md. Then propose a project scaffold based on the conventions in those files. Do not write code yet — show me the plan first."

5. **Let the agent scaffold.** It should produce a plan, wait for approval, then create the file structure described in `AGENTS.md` Section 4.

## How the agent learns over time

- Every time you correct it, it appends a line to `MEMORY.md`.
- Every session ends with `PROGRESS.md` updated so the next session resumes cleanly.
- Architectural decisions get logged so the agent doesn't re-litigate them next week.

## Customize for your project

Things you'll likely tweak:
- **Stack additions** in `AGENTS.md` (TanStack Query? Zustand? Add them under Section 1.)
- **Design tokens** — define your real palette/spacing scale in `src/styles/tokens.css` once it exists.
- **Permission gates** in `000-root.mdc` — loosen or tighten as you trust the agent more.

## Common adjustments

- **Solo dev, fast iteration:** Remove the "ask permission for refactoring across 3+ files" rule.
- **Team project:** Add a rule requiring every `feat:` commit to reference an issue number.
- **No Node backend:** Delete `400-node-server.mdc` and the `server/` folder reference in AGENTS.md.

## Verify it's working

After your first few interactions, the agent should:
- ✅ Always present a plan before coding
- ✅ Ask before installing dependencies
- ✅ Reference `MEMORY.md` when relevant ("As noted in MEMORY.md...")
- ✅ Update `PROGRESS.md` without being asked

If it's skipping these, paste this into chat: *"Re-read AGENTS.md and the cursor rules. Confirm the four-phase workflow."*
