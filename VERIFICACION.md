# Nombre público: Abner Tovar

Fecha: 21 de octubre de 2026.

- Nombre visible, textos alternativos, etiquetas accesibles, autor, títulos y metadatos sociales actualizados a Abner Tovar. Monograma de cabecera, pie e icono actualizado a at.
- Retrato renombrado a src/assets/abner-tovar.jpg y descarga a public/abner-tovar-cv.pdf, con todas las referencias actualizadas.
- CV: nombre y metadatos modificados; dos páginas, enlaces y contenido profesional conservados. Texto completo cotejado contra el original permitiendo únicamente la sustitución del nombre; ambas páginas renderizadas y revisadas. El área bajo el encabezado de la primera página no presenta diferencias visuales con el original. El documento ya no es una copia binariamente idéntica al original.
- Se conservan el correo, GitHub, LinkedIn y el dominio de producción reales. Las referencias históricas de los registros anteriores describen los archivos y entregas originales.
- npm run format y npm run validate aprobados; comprobadas las referencias del build y la ausencia del nombre anterior en textos públicos, excepto identificadores de contacto y dominio.
- Entrega exclusivamente local, sin commits, push ni despliegue.

---

# Revisión editorial y SEO local

Fecha: 21 de octubre de 2026. Rama: `feat/portafolio-daniel`.

- Se preservó la actualización local de proyectos y el CV. Se corrigieron artículos, puntuación y consistencia, se resumieron tarjetas y detalles y se sustituyeron encabezados genéricos por títulos descriptivos. No se modificaron estilos, fechas, empresas, tecnologías ni métricas.
- El H1 principal identifica el rol de desarrollador frontend. Se mantienen las atribuciones de Interamérica, Loro Granada y el sistema de citas reemplazado, así como el 18 % reportado por el cliente durante cinco meses, sin asignarlo a un caso concreto.
- Títulos y descripciones únicos para portada y cuatro casos; las descripciones tienen entre 145 y 153 caracteres. La 404 tiene metadatos propios y noindex. Un H1 por página y jerarquía sin saltos en las seis páginas HTML.
- Canonical y og:url coherentes con el dominio configurado. Open Graph y tarjetas sociales con título, descripción, imagen absoluta y texto alternativo. Se verificó que las imágenes sociales existen en dist.
- Sitemap estático con las cinco URL canónicas indexables, sin 404 ni PDF. Robots permite rastreo y referencia el sitemap. Sin dependencias nuevas ni cambios al lockfile.
- `npm run format` y `npm run validate` aprobados: cero errores, advertencias e indicaciones de Astro; tipos, lint, formato y build correctos. Se generan seis páginas HTML y dos recursos estáticos nuevos: robots.txt y sitemap.xml.
- Comprobación del build: enlaces internos, anclas y recursos locales sin faltantes; CV idéntico al original y páginas sin scripts ejecutables.
- Revisión visual en Chromium de escritorio y lectura móvil. Portada y cuatro casos a 390 y 320 px útiles, sin desbordamiento horizontal. Capturas locales: `.qa/editorial-desktop.png` y `.qa/editorial-mobile.png`. Los marcos temporales de QA se eliminaron del build final.
- Límites: sin pruebas en dispositivos físicos, auditoría con lector de pantalla, Lighthouse ni validación real de tarjetas en redes. Sin comprobación de indexación o posicionamiento, envío de sitemap a Google o cambios en Search Console.
- Entrega local: sin commits, push, GitHub Actions ni despliegue en Vercel.

---

# Actualización local: proyectos reales

Fecha: 20–21 de octubre de 2026. Rama: `feat/portafolio-daniel`.

- Estado inicial revisado: se conservó el ajuste local a inglés B1. Sin commits, push ni despliegues en esta entrega.
- Cuatro casos reales: Grupo México, Médica Fértil, Refabulare e Interamérica. Cada caso tiene página estática, contexto, responsabilidad, tecnologías y fuentes de capturas. Grupo México reúne los 16 enlaces y dos ejemplos visuales; las aplicaciones privadas solo se describen.
- Capturas reales del 20 de octubre guardadas como WebP locales y variantes adaptables generadas por Astro. Loro Granada se presenta sin captura ficticia y con enlace al archivo verificado del 15 de noviembre de 2022. El video de su inicio no se recuperó.
- Se eliminaron los conceptos y sus ilustraciones, los filtros y la hidratación de la galería. La portada prioriza proyectos y sintetiza experiencia y sobre mí. La coordinación residencial conserva el carácter complementario.
- CV vigente «Daniel Balderas CV Frontend ES.pdf» en la ruta anterior, 105496 bytes. SHA-256 de origen, copia pública y build coincidentes. No se modificó el PDF original.
- `npm run format` y `npm run validate`: tipos, lint, formato y build estático aprobados. Se generan seis páginas, incluidos cuatro casos y la 404. Sin dependencias ni adaptadores nuevos; package.json y package-lock.json se conservan.
- Build: 37 rutas y recursos locales referenciados comprobados, incluidos srcset, estilos, PDF y anclas, sin destinos faltantes. Las seis páginas generadas contienen cero scripts: el contenido, las imágenes y la navegación no dependen de JavaScript.
- Navegador Chromium: presentación y proyectos en escritorio; portada y los cuatro casos en marcos móviles con ancho útil real de 390 y 320 px, sin desbordamiento horizontal del documento. Se revisó la composición de tarjetas y detalles. Son vistas de navegador, no pruebas en dispositivos físicos.
- Teclado: Tab muestra el enlace de salto con foco visible; Enter coloca el foco en main. Tab/Enter llevan a Proyectos y abren el caso de Grupo México. Se inspeccionaron nombres y destinos de contacto y navegación. No se activaron clientes de correo ni se enviaron formularios.
- Veinte URLs públicas de proyectos devolvieron HTTP 200 mediante HEAD; las cinco capturas se obtuvieron navegando los sitios. El archivo de Loro Granada se abrió y su contenido corresponde a la agencia investigada. Las respuestas HTTP solo comprueban disponibilidad en ese momento, no autoría ni todas las funcionalidades.
- Las capturas actuales no son evidencia histórica. En Médica Fértil se aclara que el sistema propio fue reemplazado; la captura es del sitio público. Interamérica muestra Recursos en inglés tras la redirección de esa sección. El 18 % conserva atribución al cliente y cinco meses, sin asociarlo a los casos destacados.
- Pendiente de documentación, sin bloquear esta entrega: el video histórico de Loro Granada, la relación de la métrica del 18 % con un proyecto identificable y el detalle técnico de las plataformas privadas. No se completaron esos datos por inferencia.
- Movimiento reducido respetado en CSS; no se emuló la preferencia. No se realizaron Lighthouse, auditoría con lector de pantalla, Safari, Firefox ni comprobaciones funcionales privadas.
- Capturas de entrega: `.qa/portfolio-desktop.png`, `.qa/portfolio-mobile.png` y `.qa/portfolio-preview.jpg`. La página de marcos móviles se usó únicamente en dist y se retiró mediante el build final; no existe en public ni en las fuentes.
- GitHub Actions y Vercel: no ejecutados en esta tarea. Las comprobaciones anteriores son locales y las consultas a sitios de terceros no constituyen un despliegue del portafolio.

Los registros siguientes corresponden a entregas anteriores.

---

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
