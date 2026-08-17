# Muhammed Shiyas V P — Personal Portfolio

Premium dark-luxury portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Real content recovered from the old site

Real assets were recovered from an UpdraftPlus `uploads.zip` backup and are wired in:

- `public/images/portrait.webp` — your real portrait
- `public/images/certifications/` — real Google Ads, Google Analytics, and Instagram certificates
- `public/images/testimonials/` — real client photos (Sneha, Vaishnav, Sajith, Sulaim CK)
- `public/images/clients/` — real client/brand logos in the trust bar marquee

**Still placeholder — needs the real text**, because it lived in the WordPress database
(not included in the theme/plugins/uploads backups you provided):
- `lib/data.ts` → `testimonials[].quote` — replace `[Add ...'s real testimonial text here.]`
  with the actual quotes before publishing, since these are attributed to real, named people.
- `lib/data.ts` → `projects` — replace the placeholder problem/solution/result/metrics with
  real case study details.
- `lib/data.ts` → `experience[].points`, `services[].description`, bio copy in `About.tsx` —
  written to match your brief; swap in your real copy where you have it.

If you find the matching `-db.zip` from the same UpdraftPlus backup, its SQL export will contain
the original page/post text (bio, testimonials, project write-ups) — I can extract it from there.

## Project structure

```
app/                  Routes, layout, global styles, sitemap/robots
components/            One component per section
components/ui/         Shared primitives (Reveal, MagneticButton, SectionHeading)
lib/data.ts             All editable content
lib/utils.ts            cn() className helper
public/images/           Real recovered photos, certificates, client logos
```

## Design tokens

- Background `#000000` / `#0A0A0A`
- Accent `#F01D4A` (crimson)
- Display font: Space Grotesk · Body font: Inter

## SEO

Person + ProfessionalService JSON-LD in `app/layout.tsx`, OpenGraph/Twitter metadata,
`app/sitemap.ts`, `app/robots.ts`. Update `siteUrl` before deploying.

## Deploying

```bash
npm run build
```
Ready for Vercel.
