# MEMORY.md

> Durable knowledge the agent has accumulated across sessions. Read at the start of every session. Append (don't rewrite) when something non-obvious comes up. Keep under 300 lines.

---

## Architecture decisions

- 2026-05-02: Static SPA with React + Vite. No SSR — GitHub Pages requires static output. HashRouter chosen over BrowserRouter to avoid 404 on direct URL access to blog posts on GitHub Pages.
- 2026-05-02: No Supabase/backend for this project. All content is TypeScript data files. Blog posts are .md files parsed at runtime with `marked` + custom frontmatter parser.
- 2026-05-02: Vite base path set to `/work-website/` — must match the GitHub repo name exactly.
- 2026-05-02: Gallery uses a manual data file (src/data/gallery.ts) rather than import.meta.glob — images live in public/images/gallery/, user adds entries to the data file.

## Gotchas

- 2026-05-02: Node.js was not installed on this machine. Installed via nvm (`~/.nvm`). Always source nvm before running npm: `export NVM_DIR="$HOME/.nvm" && \. "$NVM_DIR/nvm.sh"`.
- 2026-05-02: Blog .md files use `import.meta.glob` with `{ query: '?raw', import: 'default' }` — this is Vite 5's API for importing raw file content. Different from `{ as: 'raw' }` in older docs.
- 2026-05-02: The Formspree form ID is a placeholder `YOUR_FORM_ID` in src/components/Contact/Contact.tsx — user must sign up at formspree.io and replace it.
- 2026-05-02: `marked.setOptions` is deprecated in marked v12; use `marked.use()` instead if options need to be changed.

## User preferences

- 2026-05-02: Minimalistic, elegant, systematic design. Deep charcoal (#1C1C1E) + gold (#C9A84C) + warm white (#FAFAF8) palette. Nunito (headings/display) + Open Sans (body). User explicitly rejected navy blue and Playfair Display/Inter.
- 2026-05-02: No Tailwind, no CSS-in-JS. Plain CSS with BEM-style naming co-located with components.
- 2026-05-02: Animations via IntersectionObserver + CSS transitions only — no animation libraries.
- 2026-05-02: User is not very technical on the frontend — keep content editing to simple data files (books.ts, gallery.ts, blog/*.md).

## Mistakes & corrections

- 2026-05-02: User stated their title as "VP of Strategic Insights and Data Office" — LinkedIn PDF showed "Senior Director". Correct title is "Vice President, Strategic Insights & Data Office" (promoted January 2026).

## Domain glossary

- SIDO = Strategic Insights & Data Office (Walid's department at Innovation FCU)
- IFCU = Innovation Federal Credit Union
- ABCU = the credit union acquired/merged into IFCU
- RRS = regulatory reporting system
- MIS = management information system
- NBA = Next Best Action (VeriPark product)
- RESL = Real Estate Secured Lending
- BCAR = Business Credit Allocation Report (regulatory)
- CEBA = Canadian Emergency Business Account
- OSFI = Office of the Superintendent of Financial Institutions (Canadian regulator)

## Project details

- GitHub username: 15wim
- Repo name: work-website
- Live URL: https://15wim.github.io/work-website/
- Contact email: walid.matin@gmail.com
- LinkedIn: https://www.linkedin.com/in/walidmatin/
- Location: Stoney Creek, Ontario, Canada
- Languages: English, Bengali, Hindi
