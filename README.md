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

The project entries in `src/content/projects.ts` and the abstract artwork in
`src/App.tsx` are explicitly labeled placeholders. Replace them only with
authorized project details and original or approved imagery. Optional project
images, galleries, and years can be added to the `PortfolioProject` data.

Set `VITE_CONTACT_EMAIL` in a local `.env.local` file or the deployment
environment to show a working email link. The contact section will continue to
show a clear placeholder until an address is configured.

Deploy the Vite app from the repository’s `main` branch on Vercel. No deployment
URL is hardcoded in the application.
