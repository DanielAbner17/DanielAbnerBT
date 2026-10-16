# Daniel Balderas · Portafolio frontend

Portafolio personal basado en Astro, React, Tailwind CSS 4 y TypeScript estricto. Generación estática, sin adaptadores ni dependencias nuevas. Diseño oscuro con acentos lima, navegación por secciones y proyectos de ejemplo identificados como conceptos.

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

- `src/data/portfolio.ts`: contacto, enlaces, experiencia y proyectos de ejemplo.
- `src/pages/index.astro`: presentación, trayectoria, sobre mí, tecnologías y contacto.
- `src/components/ProjectGallery.tsx`: única isla hidratada; filtros con estado y vistas ilustrativas de los proyectos. El contenido completo se renderiza también en el servidor.
- `src/components/Navigation.astro` y `Footer.astro`: navegación y marca.
- `src/layouts/BaseLayout.astro`: idioma, metadatos, enlace para saltar al contenido y estructura común.
- `src/styles/global.css`: tokens de Tailwind 4, componentes visuales y adaptación móvil.
- `public/daniel-balderas-cv.pdf`: CV descargable proporcionado por el propietario.
- `public/favicon.svg`: monograma de la marca.
- `src/pages/404.astro`: página de error personalizada.

### Sustituir proyectos

Edita `projects` en `src/data/portfolio.ts`. Cada proyecto tiene nombre, categoría, descripción, tecnologías, explicación y una vista conceptual (`dashboard`, `store` o `learning`). Para incorporar capturas reales, adapta `ProjectPreview` en `ProjectGallery.tsx` y agrega imágenes locales con texto alternativo.

Los campos opcionales `demoUrl` y `codeUrl` muestran enlaces solo si tienen valor. No hay enlaces ficticios. Al sustituir todos los ejemplos por trabajos reales, actualiza las etiquetas «Ejemplo», la nota de conceptos y la introducción de la sección en `index.astro`. No publiques métricas ni aportaciones que no puedas verificar.

Para actualizar el CV, sustituye el PDF conservando su nombre o cambia `profile.cv`. Revisa los datos de contacto públicos antes de publicar. El sitio no utiliza formularios ni servicios externos: el correo abre el cliente de email y los perfiles sociales abren sus páginas.

### Diseño

La referencia consultada [porfolio.dev](https://porfolio.dev/) inspira la jerarquía profesional, la experiencia cronológica y el acceso directo a contacto y CV. De [Javier Miz](https://www.javiermiz.com/cv) se retoma la claridad curricular y de [Jonathan Gómez](https://jonathangomz.github.io/) el lenguaje visual técnico y los detalles desplegables. Las tres referencias se consultaron; las dos últimas mediante navegador. La composición, la identidad visual y las ilustraciones de proyectos se desarrollaron para este portafolio. No se incorporan fotografías de terceros, fuentes remotas ni bibliotecas de iconos.

## Publicación en Vercel

La configuración conserva el stack y la salida estática de la plantilla. En Vercel: preset **Astro**, instalación `npm ci`, build `npm run build`, salida `dist`, Node **24.x** y rama de producción **main**. No requiere variables de entorno.

Cuando conozcas el dominio definitivo, agrega `site: 'https://tu-dominio.com'` en `astro.config.mjs`. El layout generará canonical y `og:url`; se omiten hasta tener una URL real.

Trabaja en ramas `feat/...` o `fix/...`, ejecuta `npm run validate` y abre un PR hacia `main` documentando cambios y comprobaciones. `.github/workflows/ci.yml` ejecuta las verificaciones de GitHub Actions de forma independiente a Vercel. Los checks locales no prueban que CI o el despliegue remoto hayan pasado.

Consulta `VERIFICACION.md` para los resultados de esta entrega. `.qa/`, `.tools/` y `.npm-cache/` son carpetas locales ignoradas y no forman parte del despliegue.
