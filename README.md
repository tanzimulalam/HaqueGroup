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

The app is ready to deploy to **Vercel** or any Node-compatible hosting:

1. Push the repo to GitHub (already configured for `https://github.com/tanzimulalam/HaqueGroup`).
2. On [Vercel](https://vercel.com/), click **New Project**, import the repo.
3. Use the default Next.js settings (build command `npm run build`, output `.next`).
4. Deploy – Vercel will handle build & hosting.

You can also deploy to other platforms (Netlify, Render, etc.) using their Next.js guides.

---

## License

This project is proprietary to **Haque Consultancy** and is intended for the company’s website presence.  
You may clone and adapt it for personal learning, but production reuse should be authorized by the owners.

