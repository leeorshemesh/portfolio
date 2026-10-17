---
title: "Notes from the ACM Portfolio Workshop"
description: "What I took away from ACM at UCSB’s portfolio workshops: stack choices, structure, and what belongs on a CS portfolio."
date: "2026-10-16"
---

ACM at UCSB ran workshops on building a portfolio with **Next.js** and **Tailwind CSS**. The goal was a site that shows who you are, what you have built, and how to reach you.

## Stack

The recommended stack was:

- **Next.js** for the app structure and routing
- **Tailwind CSS** for styling without fighting a giant stylesheet
- **Vercel** for deploying a modern Next.js site with simple push-to-deploy

## What belongs on the site

Workshop #2 listed the essentials:

1. Clear introduction and branding
2. Project showcase with links
3. Skills and expertise
4. Downloadable resume
5. Contact information
6. Blog (optional) for tech writeups and tutorials

## Coding practices that stuck

- Keep **naming consistent** — PascalCase for components, camelCase for variables
- Prefer **one component per file** and a clear folder hierarchy
- **Separate content from UI** so you can update projects without rewriting layout code
- Stay **DRY** — shared pieces like buttons should live in one place

This site follows that guidance: content lives in data modules and markdown posts, components stay focused, and the resume is a simple PDF drop-in under `public/`.
