# Muhammed Shiyas V P — Personal Portfolio

A premium, dark-luxury portfolio site built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                  Routes, layout, global styles, sitemap/robots
components/            One component per section (Hero, Services, Projects, ...)
components/ui/         Shared primitives (Reveal, MagneticButton, SectionHeading)
lib/data.ts             All editable content — copy, projects, skills, testimonials
lib/utils.ts            cn() className helper
```

## Customizing content

Almost everything on the page — headline copy, services, projects, skills,
certifications, testimonials, process steps, and contact links — lives in
`lib/data.ts`. Edit that file and the whole site updates.

## Images

The design currently uses placeholder gradient panels for the portrait and
project visuals (`components/About.tsx`, `components/Projects.tsx`). Add real
photography to `public/` and swap in `next/image` where indicated.

Also add:
- `public/resume.pdf` — for the resume download link
- `public/og-image.jpg` — 1200×630 social share image

## Contact form

`components/Contact.tsx` currently simulates a successful submission on the
client. Wire the `handleSubmit` function to an email or CRM provider (Resend,
Formspree, a serverless API route, etc.) before going live.

## Design tokens

Colors, fonts, and animation keyframes are defined in `tailwind.config.ts` and
`app/globals.css`:

- Background `#000000` / `#0A0A0A`
- Accent `#F01D4A` (crimson)
- Display font: Space Grotesk · Body font: Inter (via `next/font/google`)

## SEO

- Person + ProfessionalService JSON-LD schema in `app/layout.tsx`
- OpenGraph + Twitter card metadata
- `app/sitemap.ts` and `app/robots.ts`

Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts`/`app/robots.ts` to
your real domain before deploying.

## Deploying

This project is ready to deploy on Vercel:

```bash
npm run build
```
