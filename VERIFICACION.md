# Verificación del portafolio

Fecha: 16 de octubre de 2026. Rama: `feat/portafolio-daniel`.

- Node.js 24.22.0 y npm 11.19.1.
- `npm ci`: instalación completada, 434 paquetes, cero vulnerabilidades reportadas.
- `npm run format`: formato aplicado con Prettier y orden de clases Tailwind.
- `npm run validate`: tipos, lint, formato y generación estática completados. Astro: cero errores, advertencias e indicaciones.
- Vista previa: respuesta HTTP 200, revisión visual en navegador de escritorio y a 390 px mediante un iframe local de QA, eliminado antes del build final.
- Filtros: Todos muestra 3 conceptos, Aplicaciones muestra 2 y Sitios web muestra 1. Verificados con ratón y con Tab/Enter.
- Verificados la navegación a Proyectos y el desplegable de descripción. Enlaces de correo, LinkedIn y GitHub inspeccionados en el árbol de accesibilidad.
- CV: copia binariamente idéntica al PDF original, verificada con SHA-256. Disponible en `/daniel-balderas-cv.pdf`.
- El contenido se genera en HTML; React hidrata solo los filtros de proyectos. No se agregaron dependencias ni adaptadores; `package-lock.json` se conserva.
- No se ejecutaron GitHub Actions ni un despliegue real en Vercel. No hay URL de producción verificada.
- No se realizó auditoría con lector de pantalla ni medición Lighthouse; el lint y la revisión visual no sustituyen esas pruebas.

Incidencia local: `npm ci` encontró una dependencia nativa bloqueada. Se conservó la instalación previa en `.qa/dependencies-before-install` y se reinstaló desde el lockfile. La carpeta de respaldo está ignorada y no forma parte de la entrega.

A continuación se conserva el registro anterior de la plantilla como referencia histórica; sus resultados no corresponden a esta implementación.

---

# Verificación de la plantilla

Fecha: 16 de octubre de 2026. Entorno: Windows y PowerShell.

## Versiones utilizadas

| Herramienta                | Versión |
| -------------------------- | ------- |
| Node.js                    | 24.19.0 |
| npm                        | 12.2.0  |
| Astro                      | 7.4.0   |
| @astrojs/react             | 7.1.0   |
| React / React DOM          | 19.3.1  |
| Tailwind CSS / plugin Vite | 4.3.3   |
| TypeScript                 | 6.0.3   |
| ESLint                     | 10.13.0 |

Versiones exactas y dependencias transitivas en `package-lock.json`.

## Ejecutado y aprobado

- `npm run validate`: tipos, lint, formato y compilación estática aprobados.
- `astro check`: 0 errores, 0 advertencias y 0 sugerencias.
- Se exportaron los archivos del índice Git a `.qa/clean`, sin dependencias ni artefactos generados. En esa copia, `npm ci --offline` usando la caché de npm instaló 434 paquetes y `npm run validate` volvió a pasar. Esto comprueba que el código y el lockfile bastan para instalar y compilar desde una copia limpia; no se simuló un clon remoto ni una ejecución en Linux.
- Build: `dist/index.html`, `dist/404.html` y recursos locales generados.
- Vista previa de producción: `/` devuelve HTTP 200; `/ruta-inexistente` devuelve HTTP 404 y muestra el diseño de la plantilla.
- React en navegador: estado «React activo», secuencia 00 → 02 → 01 → 00, botón de restar deshabilitado en cero y activación con Enter. El contador también funcionó en móvil. No se recorrieron los 99 incrementos del límite superior.
- Navegación: el enlace «Saltar al contenido» coloca el foco en `main#contenido`; el enlace de regreso de la página 404 vuelve al inicio.
- Tailwind: estilos aplicados y cuadrícula del stack con cuatro columnas en escritorio y una en móvil, comprobados mediante estilos calculados y capturas.
- Revisión visual en Chromium a 1280 × 900 y 390 × 844. Ancho de página comprobado también a 320 × 740, sin desbordamiento horizontal del documento. El bloque de código tiene desplazamiento interno cuando es necesario.
- Página 404: metadato `noindex, follow` presente.
- Sin errores ni advertencias de consola durante las interacciones iniciales revisadas.
- La instalación de dependencias informó 0 vulnerabilidades conocidas en ese momento.

Capturas locales en `.qa/escritorio.jpg`, `.qa/movil.jpg` y `.qa/vista-previa.jpg`; están ignoradas por Git. `.qa/clean` conserva la copia de comprobación. Son artefactos locales de esta entrega, no parte de la plantilla.

## Pendiente de comprobación externa

- Primer commit, creación del remoto y publicación en GitHub. El repositorio local está iniciado en `main`, con los archivos preparados en el índice y sin commits.
- Ejecución real de GitHub Actions en su runner Linux, protección de `main` y revisiones de PR.
- Importación y despliegue en Vercel, dominio definitivo y URL canónica.
- Pruebas con Safari, Firefox, dispositivos físicos y lectores de pantalla. El lint y las comprobaciones básicas de teclado no constituyen una auditoría completa de accesibilidad.

El servidor de vista previa utilizado para QA se detiene al finalizar. Para desarrollar, inicia `npm run dev` según el README.
