# PROGRESS.md

> Current task state. Read at the start of every session. Update before ending every session.

---

## Current Task
Build and deploy Walid Matin personal website to GitHub Pages at https://15wim.github.io/work-website/

## Status
- [x] Foundation: package.json, tsconfig, vite.config.ts, index.html, eslint, prettier
- [x] Dependencies: installed via npm (Node.js 20 via nvm)
- [x] Styles: tokens.css, reset.css, global.css
- [x] Types: src/types/index.ts
- [x] Data: content.ts (experience, skills, education, certs, highlights, expertise)
- [x] Data: projects.ts (17 projects: 12 IFCU, 5 Scotiabank, 1 Snapshare)
- [x] Data: books.ts (5 books to start)
- [x] Data: gallery.ts (placeholder — user adds images)
- [x] Data: blog/2026-05-02-data-governance-matters.md (first post)
- [x] Hooks: useIntersection.ts, useBlogPosts.ts
- [x] Utils: markdown.ts (frontmatter parser + marked renderer)
- [x] App: main.tsx, App.tsx (HashRouter with routes)
- [x] Components: Nav, Hero, About, Expertise, Experience
- [x] Components: Projects (filterable), Gallery (lightbox), Books
- [x] Components: Skills, Education, Highlights (count-up), Certifications
- [x] Components: Contact (Formspree), BlogPreview
- [x] Pages: BlogIndex, BlogPost, Blog.css
- [x] Deploy: .github/workflows/deploy.yml (GitHub Actions → GitHub Pages)
- [x] Build: ✅ clean build (244KB JS, 33KB CSS)
- [x] Design overhaul: charcoal #1C1C1E + Nunito + Open Sans — approved by user 2026-05-02
- [x] Dev server tested at http://localhost:5174/work-website/ — user confirmed "This is good for now"
- [ ] Deploy: push to GitHub repo `work-website` under user `15wim`
- [ ] Setup: create Formspree account, replace YOUR_FORM_ID in Contact.tsx
- [ ] Setup: add professional headshot to public/images/walid-hero.jpg
- [ ] Setup: add secondary photo to public/images/walid-about.jpg (optional)
- [ ] Setup: enable GitHub Pages in repo settings (Source: GitHub Actions)

## Blockers / Open Questions
- Formspree form ID not yet set — placeholder `YOUR_FORM_ID` in src/components/Contact/Contact.tsx
- No headshot photos yet — Hero shows initials "WM" as placeholder until image is added

## Next Session Should Start By
- Confirming site is live at https://15wim.github.io/work-website/
- User may want to adjust design, colors, or content
- Can add more blog posts by creating .md files in src/data/blog/
- Can add gallery images to public/images/gallery/ and list in src/data/gallery.ts
- Can add books to src/data/books.ts

## Last updated
2026-05-02
