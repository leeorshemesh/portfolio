# Leeor Shemesh Portfolio

Personal portfolio for [Leeor Shemesh](https://leeor-shemesh.vercel.app) — UC Santa Barbara Computer Science.

**Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS  
**Live:** https://leeor-shemesh.vercel.app

## Features

- Hero, about / education, experience, projects, skills, blog, resume, contact
- Markdown blog posts with static generation
- Formspree contact form
- SEO: metadata, Open Graph, `robots.txt`, sitemap, JSON-LD
- Optional project screenshots (add when you have them)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Where | Purpose |
|----------|--------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | `.env.local` and Vercel | Contact form endpoint ID |

Formspree setup:

1. Create a form at [formspree.io](https://formspree.io) for your email.
2. Copy the ID from `https://formspree.io/f/XXXXXX`.
3. Set `NEXT_PUBLIC_FORMSPREE_ID=XXXXXX` locally and in **Vercel → Project → Settings → Environment Variables**.
4. Redeploy after changing env vars (they are baked in at build time).

## Updating content

| What | Where |
|------|--------|
| Bio, GPA, honors, projects, skills, links | [`content/site.ts`](content/site.ts) |
| Blog posts | Add `content/blog/your-post.md` with `title`, `description`, `date` frontmatter |
| Resume PDF | Replace [`public/resume.pdf`](public/resume.pdf) (keep the filename) |
| Portrait | Replace [`public/images/portrait.jpg`](public/images/portrait.jpg) |
| Project screenshots | See below |

### Adding a project screenshot

1. Save an image under `public/images/projects/` (e.g. `pop-up-puzzles.jpg`).
2. In `content/site.ts`, add to that project:

```ts
image: "/images/projects/pop-up-puzzles.jpg",
imageAlt: "Pop Up Puzzles game hub",
```

If `image` is omitted, the project renders text-only (current default).

## Project layout

```
app/           # Routes, layout, SEO (sitemap, robots)
components/    # UI sections (one component per file)
content/       # Site data + blog markdown
hooks/         # Client hooks (e.g. contact form submit)
lib/           # Shared helpers (blog loader, dates)
public/        # Static files (resume, images)
```

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Deploy (Vercel)

The GitHub repo is connected to Vercel. Pushing to `main` triggers a Production deploy to https://leeor-shemesh.vercel.app.

Manual deploy from this folder:

```bash
npx vercel --prod
```

## Workshop notes (what this site covers)

This site targets ACM at UCSB’s portfolio workshop series:

- **Workshop 1–2:** Next.js + Tailwind portfolio sections, clean structure, contact form, blog, deploy, SEO
- **Workshop 3:** Full-stack *learning roadmap* (APIs, databases, BaaS, cloud) — intentionally not built into this personal site; use it for future side projects
