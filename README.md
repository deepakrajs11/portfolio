# Deepakraj S — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

- Backend/distributed-systems-forward design (terminal-style hero, animated architecture diagram)
- Featured projects, experience timeline, skills, blog posts, and a live LeetCode stats widget
- `/api/leetcode` is a real server Route Handler: fetches live stats, caches for an hour, and falls
  back to known-good static numbers if the upstream API is unavailable

## Develop

```bash
npm install
npm run dev
```

## Edit content

All copy (profile, skills, experience, projects, blog posts) lives in `lib/data.ts` — edit that
file and the whole site updates.

## Deploy for free

The easiest path is [Vercel](https://vercel.com) (built by the Next.js team, generous free tier,
zero config):

1. Push this repo to GitHub.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset auto-detects as Next.js — click **Deploy**.

Alternatives: Netlify (also free, needs the Next.js runtime plugin, which it adds automatically)
or Cloudflare Pages.
