# Plátano Macho Restaurante "Cánovas" — sitio web

Landing page del restaurante colombiano Plátano Macho (L'Eixample, Valencia).

## Stack

- React 19 + TypeScript + Vite 8
- [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) — pre-renderizado estático (SSG) para SEO real
- Tailwind CSS 4
- react-helmet-async (vía `vite-react-ssg`) para metadatos y datos estructurados
- embla-carousel-react para la galería

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Despliegue

El sitio se publica automáticamente en GitHub Pages mediante GitHub Actions
(`.github/workflows/deploy.yml`) en cada push a `main`.
