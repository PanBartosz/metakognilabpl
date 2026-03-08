# meta.kognilab.pl (Astro)

Static Astro version of the project website `https://meta.kognilab.pl`, with Docker support for local and container deployment.

## Quick start

```bash
npm install
npm run dev
```

The Astro dev server runs on `http://localhost:4322/`.

Production build:

```bash
npm run build
```

## Docker

Build and serve the static output through Nginx:

```bash
docker compose up -d --build
```

By default the container is exposed at `http://localhost:4432/`.

## Project layout

```text
.
├── public/
│   ├── favicon.svg
│   └── files/
├── src/
│   ├── assets/wordpress/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── Dockerfile
├── astro.config.mjs
└── docker-compose.yml
```

## Notes

- Routes mirror the public WordPress URLs (`/front-page/goals/`, `/project-has-started/`, etc.).
- The site intentionally keeps the old slate-paper visual DNA, but the layout and components are rebuilt from scratch.
