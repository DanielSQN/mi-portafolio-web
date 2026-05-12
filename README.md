# Mi Portafolio Web

Portfolio one-page de Daniel Quintero construido con Next.js, JavaScript y CSS modular global.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Estructura

- `src/data/portfolio.js`: contenido editable del portfolio.
- `src/components`: secciones y componentes reutilizables.
- `src/app`: rutas, metadata y estilos globales.

## Etapas

La primera etapa entrega una home completa responsive con animaciones de aparición en scroll. Las siguientes etapas sugeridas son formulario real, detalle de proyectos, SEO avanzado y deploy.

## Deploy en Vercel

1. Importa `DanielSQN/mi-portafolio-web` en Vercel.
2. Usa `main` como production branch.
3. Mantén los comandos por defecto:

```bash
npm install
npm run build
```

4. Cuando tengas la URL final, configura esta variable para SEO:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

## Contenido editable

El contenido principal vive en `src/data/portfolio.js`. Para agregar el PDF real del CV, colocalo en `public/` y cambia `profile.cvUrl` por la ruta del archivo, por ejemplo `/Daniel-Quintero-CV.pdf`.

Los proyectos viven en `src/data/projects.json`; cada item puede tener `name`, `tags`, `description`, `accent` y `url`.
Tambien puede tener `img`, apuntando a una imagen dentro de `public/`, por ejemplo `/projects/dashboard-financiero.png`.

La foto personal debe ir en:

```bash
public/profile/daniel-quintero.png
```

Cuando exista ese archivo, la siguiente iteracion puede conectarlo en la seccion "Sobre mi".
