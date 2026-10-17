# Leeor Shemesh Portfolio

Personal portfolio site built with Next.js and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io) pointed at `leeorshemesh1@gmail.com`.
2. Copy the form ID from the endpoint (`https://formspree.io/f/XXXXXX` → `XXXXXX`).
3. Add it locally:

```bash
cp .env.example .env.local
```

Set:

```
NEXT_PUBLIC_FORMSPREE_ID=XXXXXX
```

4. For production, add the same variable in the Vercel project settings (or via `vercel env add`).

## Updating content

- Site copy / projects / skills: `content/site.ts`
- Blog posts: add a Markdown file under `content/blog/`
- Resume PDF: replace `public/resume.pdf` (keep the same filename)
- Portrait: replace `public/images/portrait.jpg`
