# LIZ STUDIO

Portfolio site for LIZ STUDIO, built with React, TypeScript, and Vite.

## Development

```sh
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before deploying. The production build is
created in `dist/`; `npm run preview` serves it locally.

## Portfolio content

Copy lives in `src/content/site.ts` in Spanish (default) and English; visitors
switch with the ES / EN toggle. Artwork comes from the slides in
`public/portfolio/`; each piece is a pixel region of a 1600×900 slide, so to
change one, edit its `slide(file, x, y, w, h)` entry.

The contact email defaults to the address in the portfolio; set
`VITE_CONTACT_EMAIL` in `.env.local` or the deployment environment to override it.

Deploy the Vite app from the repository’s `main` branch on Vercel. No deployment
URL is hardcoded in the application.
