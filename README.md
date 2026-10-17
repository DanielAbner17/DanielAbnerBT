# Daniel Balderas · Portafolio frontend

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

- `src/data/portfolio.ts`: contacto, enlaces, aportaciones destacadas, experiencia y proyectos de ejemplo.
- `src/assets/daniel-balderas.jpg`: fotografía original. `astro:assets` genera variantes WebP de 320 y 460 px, con dimensiones explícitas y carga prioritaria en la presentación.
- `src/pages/index.astro`: presentación, trayectoria, sobre mí, tecnologías y contacto.
- `src/components/ProjectGallery.tsx`: única isla hidratada; filtros con estado y vistas ilustrativas de los proyectos. El contenido completo se renderiza también en el servidor.
- `src/components/Navigation.astro` y `Footer.astro`: navegación y marca.
- `src/layouts/BaseLayout.astro`: idioma, metadatos, enlace para saltar al contenido y estructura común.
- `src/styles/global.css`: tokens de Tailwind 4, componentes visuales y adaptación móvil.
- `public/daniel-balderas-cv.pdf`: nueva versión del CV proporcionada por el propietario; se conserva la ruta para mantener los enlaces de descarga.
- `public/favicon.svg`: monograma de la marca.
- `src/pages/404.astro`: página de error personalizada.

### Sustituir proyectos

Edita `projects` en `src/data/portfolio.ts`. Cada proyecto tiene nombre, categoría, descripción, tecnologías, explicación y una vista conceptual (`dashboard`, `store` o `learning`). Para incorporar capturas reales, adapta `ProjectPreview` en `ProjectGallery.tsx` y agrega imágenes locales con texto alternativo.

Los campos opcionales `demoUrl` y `codeUrl` muestran enlaces solo si tienen valor. No hay enlaces ficticios. Al sustituir todos los ejemplos por trabajos reales, actualiza las etiquetas «Ejemplo», la nota de conceptos y la introducción de la sección en `index.astro`. No publiques métricas ni aportaciones que no puedas verificar.

Para actualizar el CV, sustituye el PDF conservando su nombre o cambia `profile.cv`. Revisa los datos de contacto públicos antes de publicar. El sitio no utiliza formularios ni servicios externos: el correo abre el cliente de email y los perfiles sociales abren sus páginas.

### Contenido profesional y fotografía

La redacción se adapta del CV actualizado en primera persona. Las tres aportaciones se presentan una vez y la experiencia desarrolla las responsabilidades complementarias. El 18 % de crecimiento en ventas se atribuye al cliente y conserva el periodo de cinco meses; no se presenta como una relación causal demostrada. La coordinación residencial aparece como experiencia adicional, separada del recorrido frontend.

Para cambiar la foto, sustituye el archivo en `src/assets/` y revisa el texto alternativo, las dimensiones y el encuadre. El tratamiento visual se realiza con CSS; la fotografía mantiene su apariencia original. El retrato pasa a una composición compacta encima de la presentación en móvil. Las microinteracciones respetan `prefers-reduced-motion`.

La evolución visual y de contenido se entrega localmente, sin commit ni despliegue. El dominio de producción descrito abajo corresponde al despliegue anterior hasta que se publique esta revisión.

### Diseño

La referencia consultada [porfolio.dev](https://porfolio.dev/) inspira la jerarquía profesional, la experiencia cronológica y el acceso directo a contacto y CV. De [Javier Miz](https://www.javiermiz.com/cv) se retoma la claridad curricular y de [Jonathan Gómez](https://jonathangomz.github.io/) el lenguaje visual técnico y los detalles desplegables. Las tres referencias se consultaron; las dos últimas mediante navegador. La composición, la identidad visual y las ilustraciones de proyectos se desarrollaron para este portafolio. No se incorporan fotografías de terceros, fuentes remotas ni bibliotecas de iconos.

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
