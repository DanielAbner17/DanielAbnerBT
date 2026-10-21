# Abner Tovar · Portafolio frontend

Portafolio personal basado en Astro, React, Tailwind CSS 4 y TypeScript estricto. Generación estática, sin adaptadores ni dependencias nuevas. Diseño oscuro con acentos lima, fotografía personal, aportaciones destacadas y proyectos de ejemplo identificados como conceptos.

## Desarrollo

Requiere Node.js 24 (mínimo 24.16) y npm 11 o superior.

```powershell
npm ci
npm run dev
```

## Comandos

| Comando                | Función                                   |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Desarrollo local con recarga automática.  |
| `npm run check`        | Comprobación de tipos Astro y TypeScript. |
| `npm run lint`         | ESLint y reglas de accesibilidad.         |
| `npm run format`       | Prettier y orden de clases Tailwind.      |
| `npm run format:check` | Comprueba formato.                        |
| `npm run build`        | Genera `dist/`.                           |
| `npm run preview`      | Sirve el último build local.              |
| `npm run validate`     | Tipos, lint, formato y build.             |

## Contenido y estructura

- `src/data/portfolio.ts`: contacto, enlaces y experiencia resumida.
- `src/data/projects.ts`: cuatro casos reales, textos, tecnologías y su alcance, enlaces, fuentes y fecha de capturas, los 16 centros comerciales y Loro Granada como proyecto histórico.
- `src/assets/projects/`: cinco capturas locales WebP de sitios públicos actuales. No son capturas históricas ni imágenes generadas. Las originales de QA quedan en `.qa/project-originals/`, fuera de Git.
- `src/components/ProjectCard.astro`: tarjetas estáticas con imágenes adaptables, tecnologías y enlaces.
- `src/pages/proyectos/[slug].astro`: genera las cuatro páginas de detalle durante el build. El caso Grupo México incluye dos ejemplos visuales, los 16 enlaces y una descripción de las dos aplicaciones privadas, sin publicar pantallas ni datos internos.
- `src/pages/index.astro`: presentación, proyectos, experiencia, sobre mí, tecnologías y contacto. No necesita JavaScript para mostrar o recorrer contenido.
- `src/assets/abner-tovar.jpg`: foto original, conservada sin alterar la apariencia. Astro genera WebP adaptables de 320 y 460 px.
- `src/components/Navigation.astro` y `Footer.astro`: navegación y marca.
- `src/layouts/BaseLayout.astro`: idioma, metadatos, canonical y enlace para saltar al contenido.
- `src/styles/global.css`: tokens Tailwind 4, componentes visuales y adaptación móvil.
- `public/abner-tovar-cv.pdf`: CV vigente con el nombre público Abner Tovar e inglés B1. El contenido profesional se conserva; la descarga usa `/abner-tovar-cv.pdf`.
- `src/pages/404.astro` y `public/favicon.svg`: página de error e icono.

### Actualizar textos, capturas y enlaces

Edita `projects` en `src/data/projects.ts`. Cada objeto contiene `slug`, contexto de participación, descripción de unas 30–45 palabras, tecnologías confirmadas, alcance opcional, sitio público, captura y secciones del caso. `seoTitle` y `seoDescription` definen el título y el resumen únicos del caso para buscadores y redes sociales. El `slug` determina `/proyectos/<slug>/`. El grupo de centros comerciales se mantiene en `shoppingCenters`; el proyecto histórico en `historicalProject`.

Guarda nuevas capturas en `src/assets/projects/`, impórtalas en ese archivo y actualiza `image.src`, `alt`, `caption`, `sourceUrl` y la fecha de captura. Si cambian en distintas fechas, separa las fechas por imagen antes de publicarlas. Astro genera variantes WebP locales con dimensiones explícitas; las tarjetas usan una proporción 16:9 sin recortar contenido. No hay servicios externos de capturas ni filtros con JavaScript.

No deduzcas la autoría ni las tecnologías a partir del sitio público. Mantén las aclaraciones: el sistema de citas de Médica Fértil fue reemplazado; Interamérica es una colaboración parcial; Loro Granada acredita el diseño a su equipo. El archivo de Loro Granada no recupera el video del inicio, por lo que se presenta de forma tipográfica. El 18 % de ventas corresponde a un e-commerce sin identificar, con atribución al cliente y periodo de cinco meses; no está relacionado con los casos destacados.

Para actualizar el CV, sustituye el PDF conservando su nombre o cambia `profile.cv`. Para cambiar la fotografía, sustituye el archivo y revisa dimensiones, texto alternativo y encuadre. Contacto usa correo, LinkedIn y GitHub; no hay formularios ni envío de datos desde el sitio.

### SEO y metadatos

La portada y cada caso tienen título y descripción propios. `BaseLayout.astro` genera canonical, Open Graph y tarjetas sociales con imágenes locales y texto alternativo; la portada utiliza el retrato y cada caso su captura. La 404 conserva `noindex, follow` y no declara canonical.

`src/pages/sitemap.xml.ts` genera las cinco URL canónicas indexables a partir de los proyectos; no incluye 404 ni PDF. `src/pages/robots.txt.ts` permite rastreo y referencia ese sitemap. Ambos se generan de forma estática, sin dependencias adicionales, usando `site` de Astro. No se incluyen fechas de actualización inferidas ni datos estructurados no necesarios.

Criterios consultados: [títulos y metadatos](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) y [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Las verificaciones locales no confirman indexación ni posicionamiento en Google; no se envió el sitemap ni se utilizó Search Console.

### Diseño y alcance de esta entrega

Se conserva la identidad oscura y lima, el retrato y la composición del portafolio. Los proyectos pasan antes de la experiencia; se eliminaron las tres propuestas ficticias, sus ilustraciones CSS y el componente de filtros. Las microinteracciones y el desplazamiento respetan movimiento reducido. Astro renderiza todo el contenido y los casos de forma estática; la integración React sigue disponible para futuras interacciones que necesiten estado. No se añadieron dependencias ni adaptadores y el lockfile se conserva.

La referencia [porfolio.dev](https://porfolio.dev/) orienta la jerarquía y la claridad de lectura. La composición de este portafolio es propia; las capturas pertenecen a los proyectos y se identifican como actuales.

Esta actualización se entrega exclusivamente de forma local: sin commit, push ni despliegue. La configuración de producción descrita abajo corresponde a etapas anteriores.

## Publicación en Vercel

La configuración conserva el stack y la salida estática de la plantilla. En Vercel: preset **Astro**, instalación `npm ci`, build `npm run build`, salida `dist`, Node **24.x** y rama de producción **main**. No requiere variables de entorno.

Producción: [daniel-balderas-portfolio.vercel.app](https://daniel-balderas-portfolio.vercel.app). El proyecto está vinculado a `danielabner17s-projects/daniel-balderas-portfolio` y al repositorio de GitHub. El despliegue inicial se hizo desde la rama local con la CLI oficial de Vercel; no implica que los cambios estén subidos a GitHub o integrados en `main`.

`vercel.json` declara Astro, `npm ci`, `npm run build` y `dist`. `.vercelignore` excluye dependencias, carpetas de QA y archivos de entorno de las subidas. La vinculación local en `.vercel/` y el archivo `.env.local` generado por la CLI permanecen ignorados. La aplicación no utiliza ese archivo de entorno.

`site` en `astro.config.mjs` apunta al dominio de producción para generar canonical y `og:url`. Actualízalo si conectas un dominio personalizado.

Para volver a desplegar desde una máquina con sesión iniciada y el proyecto vinculado:

```powershell
npm run validate
npm exec --yes --package=vercel -- vercel deploy --prod --yes
```

Trabaja en ramas `feat/...` o `fix/...`, ejecuta `npm run validate` y abre un PR hacia `main` documentando cambios y comprobaciones. `.github/workflows/ci.yml` ejecuta las verificaciones de GitHub Actions de forma independiente a Vercel. Los checks locales no prueban que CI o el despliegue remoto hayan pasado.

Consulta `VERIFICACION.md` para los resultados de esta entrega. `.qa/`, `.tools/` y `.npm-cache/` son carpetas locales ignoradas y no forman parte del despliegue.
