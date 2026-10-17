# Evolución local: fotografía y nuevo CV

Fecha: 16 de octubre de 2026. Rama: `feat/portafolio-daniel`.

- Se conservaron los cambios de configuración de Vercel que ya estaban pendientes al iniciar esta revisión.
- Presentación con fotografía original, variantes WebP generadas por Astro, dimensiones explícitas y prioridad de carga. Acentos lima, iluminación ambiental, superficies y navegación fija con foco visible.
- Contenido adaptado del nuevo CV en primera persona: autonomía técnica, ciclo completo y tres aportaciones destacadas. El 18 % se atribuye al cliente y conserva el periodo de cinco meses. La experiencia adicional mantiene empresas, funciones y fechas del PDF.
- Nuevo CV en la misma ruta de descarga. HTTP local 200 y SHA-256 idéntico al archivo proporcionado. No se modificó el PDF original.
- `npm run format` y `npm run validate` completados: tipos, lint, formato y build sin errores. Astro informa cero errores, advertencias e indicaciones.
- Fotografía compilada en WebP: 320 y 460 px, aproximadamente 7 y 12 KB. Sin dependencias ni adaptadores nuevos. `package.json` y `package-lock.json` sin modificaciones.
- Revisión visual en navegador de escritorio y en iframes de 390 y 320 px; el contenido útil fue de 375 y 305 px por las barras de desplazamiento. Sin desbordamiento horizontal tras corregir el ancho de las vistas de proyectos.
- Teclado: Tab y Enter para saltar al contenido, acceder a proyectos, activar filtros y desplegar la explicación. Aplicaciones muestra 2 ejemplos y Sitios web muestra 1. Los enlaces conservan nombres y destinos correctos.
- Enlaces de ancla y recursos locales comprobados contra `dist/index.html`. La fotografía compilada y el PDF están presentes. La página temporal de QA se retiró antes del build final.
- `prefers-reduced-motion` contemplado en CSS; no se realizó emulación de esa preferencia ni auditoría con lector de pantalla o Lighthouse.
- Capturas locales: `.qa/evolution-desktop.png` y `.qa/evolution-mobile.png`.
- Entrega exclusivamente local: sin commit, push, ejecución de GitHub Actions ni despliegue nuevo en Vercel. La versión pública anterior no incluye esta revisión.

Los siguientes registros son históricos y corresponden a etapas anteriores.

---

# Despliegue en Vercel

Fecha: 16 de octubre de 2026.

- Producción: https://daniel-balderas-portfolio.vercel.app
- Proyecto: `danielabner17s-projects/daniel-balderas-portfolio`.
- Despliegue final: `dpl_GEqBBfU1EJ7EsuSqp5B9NpBtqJZd`, estado `READY`, destino `production`.
- Despliegue realizado con la CLI oficial de Vercel 64.4.0. El build remoto ejecutó `npm ci` y `npm run build` correctamente.
- Configuración explícita en `vercel.json`: Astro, instalación con npm, build estático y salida `dist`. Sin adaptador nuevo.
- `.vercelignore` excluye archivos de entorno y carpetas locales. La subida final contiene 35 archivos de proyecto.
- `site` en Astro configurado con el dominio de producción. Verificación HTTP sin sesión: inicio 200, URL canónica correcta y CV 200.
- `npm run validate` local volvió a pasar con los cambios de configuración: tipos, lint, formato y build.
- Proyecto conectado al repositorio de GitHub. Los cambios locales de configuración no se han subido a GitHub. Este despliegue no confirma una ejecución de GitHub Actions ni una integración en `main`.

Los siguientes registros corresponden a etapas anteriores a la publicación.

---

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
