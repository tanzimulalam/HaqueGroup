# Haque Consultancy – IT Solutions & Consulting

A modern, visually rich, single-page marketing site for **Haque Consultancy**, an IT consulting firm based in **Woodbridge, VA 22193**.  
The site highlights services across hardware, software, cybersecurity, networks, and data center operations with **3D visuals**, **smooth animations**, and a **dark neon tech aesthetic**.

Live code is intended to be deployed from this repository: `https://github.com/tanzimulalam/HaqueGroup`.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with **TypeScript**
- **UI**: [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **3D & Graphics**:
  - [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) – React renderer for Three.js
  - [`@react-three/drei`](https://github.com/pmndrs/drei) – Helpers for lights, controls, etc.
- **Animations**:
  - [`animejs`](https://animejs.com/) – hero heading and text reveal animations
  - [`framer-motion`](https://www.framer.com/motion/) – section entrances, cards, buttons
- **Icons**: [`lucide-react`](https://lucide.dev/)
- **SEO**: [`next-seo`](https://github.com/garmeeh/next-seo)
- **Fonts**: Google Fonts – **Inter** (body) & **Space Grotesk** (headings)

---

## Features

- **Single-page layout** with smooth scroll navigation:
  - Hero
  - Services
  - About
  - Team
  - Contact
- **Three.js backgrounds**:
  - Hero: glowing network sphere / particle globe
  - About: floating particle network reacting to movement
- **Custom animations**:
  - Anime.js hero title character-by-character reveal
  - Framer Motion section fade/slide-in
  - Hover-lift glass cards with neon glow
  - Custom glowing **cursor dot + ring**
- **Modern styling**:
  - Dark background `#0a0f0f` with **electric cyan** and **purple** accents
  - Glassmorphism cards and neon gradients
  - Fully responsive layout (mobile → desktop)
- **Business details baked in**:
  - Location: **Woodbridge, VA 22193**
  - Email: **haque8consulting@gmail.com**
  - Founders & roles in the **Team** section

---

## Getting Started (Local Development)

### Prerequisites

- **Node.js**: v18+ recommended
- **npm**: comes with Node (or you can use `pnpm`/`yarn` with minor changes)

### Install dependencies

```bash
cd HaqueGroup
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open: `http://localhost:3000`

The page will hot-reload as you edit files.

### Build for production

```bash
npm run build
npm start
```

This builds the optimized production bundle and serves it.

---

## Project Structure

Key folders and files:

- `pages/`
  - `_app.tsx` – global app wrapper, fonts, SEO, custom cursor
  - `index.tsx` – main single-page layout (sections composed here)
- `components/layout/`
  - `Navbar.tsx` – fixed top nav with smooth anchors
  - `Footer.tsx` – footer with location, copyright, social placeholders
  - `Cursor.tsx` – custom glowing cursor
- `components/sections/`
  - `Hero.tsx` – hero section & CTA, 3D background, animated heading
  - `Services.tsx` – services grid with hover animations
  - `About.tsx` – company description, stats, 3D network
  - `Team.tsx` – founders and roles
  - `Contact.tsx` – contact copy, email, location, and form (frontend-only)
- `components/three/`
  - `HeroBackground.tsx` – React Three Fiber hero scene
  - `AboutNetwork.tsx` – React Three Fiber about-section scene
- `components/ui/`
  - `AnimatedButton.tsx` – gradient / outline animated buttons
  - `SectionTitle.tsx` – reusable section heading block
  - `ServiceCard.tsx` – glassmorphism service cards
- `styles/`
  - `globals.css` – Tailwind base layers, custom utilities, cursor styles
- `tailwind.config.ts` – Tailwind theme extension (colors, fonts, animations)

---

## Customization Guide

- **Brand text & copy**
  - Edit section copy in:
    - `components/sections/Hero.tsx`
    - `components/sections/Services.tsx`
    - `components/sections/About.tsx`
    - `components/sections/Team.tsx`
    - `components/sections/Contact.tsx`
- **Contact details**
  - Update email or add phone number in `Contact.tsx` and `Footer.tsx`.
- **Location**
  - Update Woodbridge, VA references in `Hero.tsx`, `About.tsx`, `Contact.tsx`, and `Footer.tsx`.
- **SEO**
  - Adjust default title/description in `pages/_app.tsx` (the `SEO_CONFIG` object).
- **Visual style**
  - Tweak colors, fonts, and shadows in `tailwind.config.ts`.
  - Update custom utilities in `styles/globals.css`.

---

## Deployment

The site is configured for **fully static export** (`output: "export"` in `next.config.mjs`)
so it can be hosted on GitHub Pages, Vercel, Netlify, Cloudflare Pages, S3, or
any plain static host.

### GitHub Pages (current setup)

This repo includes a workflow at `.github/workflows/deploy.yml` that builds the
site and deploys the `out/` folder to GitHub Pages on every push to `main`.

One-time setup in GitHub:

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`**
2. Push to `main` (or run the workflow manually from the **Actions** tab).
3. The first run will publish to `https://tanzimulalam.github.io/HaqueGroup/`.
4. **Settings → Pages → Custom domain → `haque-consulting.com`** (the
   `public/CNAME` file in this repo already declares it, so this should
   auto-fill on the first deploy).
5. Tick **Enforce HTTPS** once GitHub finishes provisioning the certificate.

### DNS records for `haque-consulting.com`

At your domain registrar (Namecheap / GoDaddy / Cloudflare / etc.), set:

**Apex record (`haque-consulting.com`)** – four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**`www` subdomain** – one `CNAME` record:

```
www  CNAME  tanzimulalam.github.io
```

Propagation usually takes 10–60 minutes. While you wait, GitHub Pages will keep
showing a “DNS check in progress” banner; that's normal.

### Local preview of the static build

```bash
npm run build           # produces ./out
npx serve out           # preview at http://localhost:3000
```

### Vercel (alternative)

Static-export still works on Vercel: import the repo, accept the defaults, and
deploy. No environment variables are required.

---

## License

This project is proprietary to **Haque Consultancy** and is intended for the company’s website presence.  
You may clone and adapt it for personal learning, but production reuse should be authorized by the owners.

