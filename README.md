# TIS Animated Homepage — Frontend Developer Assignment

A modern animated homepage redesign for **Tula's International School (TIS)**.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Responsive sticky navbar
- Mobile hamburger navigation
- Animated hero section
- Custom desktop cursor
- Scroll-progress indicator
- Dark/light theme toggle with localStorage
- Scroll-triggered reveal animations
- Hover/micro-interactions
- Responsive academics cards
- Bento-style campus/facilities layout
- Admissions CTA
- Accessible semantic sections and buttons

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push the project to a public GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Content note

The assignment asks for TIS branding/content as a reference rather than an exact copy. The project uses factual high-level information from the official TIS website and uses image URLs for the visual prototype.

Before final submission, replace/confirm any imagery and copy against the current official TIS website and your assignment's exact wording.

Official reference: https://tis.edu.in/
Admissions: https://admission.tis.edu.in/

## Technical review talking points

- Components are split by responsibility: navbar, global interaction components, and page sections.
- `Reveal` centralizes the common viewport animation.
- `CustomCursor` only activates on fine-pointer devices.
- Theme preference is persisted in localStorage.
- Data-driven arrays power the academic and facilities cards.
- Framer Motion is used for entrance, hover, and scroll-triggered interactions.
- Mobile navigation is handled with an animated `AnimatePresence` menu.

## Suggested submission checklist

- [ ] GitHub repository is public
- [ ] `npm run build` succeeds
- [ ] Live Vercel URL works
- [ ] Mobile layout tested
- [ ] README checked
- [ ] Loom walkthrough recorded
- [ ] Final links submitted before the deadline
