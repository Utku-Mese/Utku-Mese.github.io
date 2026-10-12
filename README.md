# Mehmet Utku Meşe — Portfolio

Personal portfolio for Mehmet Utku Meşe, a software engineer focused on mobile products, IPTV experiences and product architecture.

## Local development

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

The production files are written to `build/`. The build also copies `index.html` to `404.html` so GitHub Pages can serve the client-side routes.

## Deployment

GitHub Pages serves the prebuilt site from the `gh-pages` branch. Source lives on `main`. A push to `main` runs `.github/workflows/pages.yml`, which installs dependencies, builds the app, and publishes `build/` to `gh-pages`.

`npm run deploy` still builds and publishes locally with the `gh-pages` package when a manual publish is needed.
