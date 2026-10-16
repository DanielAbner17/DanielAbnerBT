# Base · Astro + React + Tailwind CSS + TypeScript

Plantilla reutilizable para sitios estáticos con interactividad puntual. Incluye página de ejemplo, contador React, página 404, controles de calidad y CI listo para GitHub. La configuración de producción genera `dist/` para Vercel.

## Requisitos

- **Node.js 24**, mínimo **24.16.0**, con **npm 11 o superior**. `.node-version` y `.nvmrc` seleccionan la rama 24; `engines` restringe la versión mayor en Vercel. Mantén estas referencias y CI alineadas si actualizas Node.
- Git y una terminal. Los ejemplos funcionan en PowerShell.
- Editor opcional: VS Code; `.vscode/extensions.json` recomienda Astro, ESLint, Prettier y Tailwind CSS.
- Para publicar posteriormente: cuentas de GitHub y Vercel con acceso al repositorio.

Comprueba tu terminal antes de empezar:

```powershell
node --version
npm --version
git --version
```

Si `npm` no se reconoce, instala Node.js 24 con npm y abre una terminal nueva. Si PowerShell bloquea `npm.ps1`, utiliza `npm.cmd` en los comandos en lugar de cambiar la política global de ejecución.

## Inicio rápido

Desde una copia de esta carpeta o un clon del repositorio:

```powershell
npm ci
npm run dev
```

Abre la URL que imprime Astro, normalmente `http://localhost:4321`. Detén el proceso con `Ctrl+C`.

Para revisar la salida de producción:

```powershell
npm run validate
npm run preview
```

`preview` sirve la última compilación local; no es un servidor de producción. Ante cambios de código, vuelve a compilar para actualizar esta vista.

## Comandos

| Comando                   | Función                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| `npm ci`                  | Instala exactamente las dependencias del lockfile.                    |
| `npm run dev`             | Desarrollo con recarga automática.                                    |
| `npm run check`           | Comprueba tipos en archivos Astro y TypeScript.                       |
| `npm run lint`            | ESLint para JS, TS, TSX y Astro, con reglas de hooks y accesibilidad. |
| `npm run format`          | Aplica Prettier y ordena clases Tailwind.                             |
| `npm run format:check`    | Verifica el formato sin modificar archivos.                           |
| `npm run build`           | Genera el sitio estático en `dist/`.                                  |
| `npm run preview`         | Sirve el build local para revisión.                                   |
| `npm run validate`        | Tipos → lint → formato → build; se detiene si falla un paso.          |
| `npm run astro -- --help` | Accede a la CLI de Astro.                                             |

`astro build` compila, pero no sustituye a `astro check`; por eso se ejecutan ambos en CI.

## Estructura

```text
.github/workflows/ci.yml   # npm ci, tipos, lint, formato y build
.vscode/                  # Recomendaciones del editor
public/                   # Archivos que conservan nombre y ruta (favicon)
src/
├── assets/               # Recursos importados y procesados por Astro
├── components/           # Navigation.astro, Footer.astro, Counter.tsx
├── layouts/              # BaseLayout.astro: documento, metadatos y estilos
├── pages/                # index.astro y 404.astro
└── styles/               # global.css: Tailwind 4 y tokens del tema
AGENTS.md                 # Convenciones para asistentes de desarrollo
astro.config.mjs          # Astro estático, React y plugin de Tailwind
eslint.config.mjs         # ESLint flat config
package-lock.json         # Versiones reproducibles
tsconfig.json             # Configuración estricta
```

## Decisiones técnicas

- **Astro estático:** no se necesita servidor, adaptador de Vercel ni `vercel.json` para este caso.
- **React:** integración oficial `@astrojs/react`. `Counter` utiliza `client:load`, genera HTML inicial y se hidrata en el navegador. Los controles se habilitan al terminar la hidratación; sin JavaScript el contenido permanece visible y se muestra una explicación.
- **Tailwind 4:** plugin oficial `@tailwindcss/vite` e importación de CSS global desde el layout. No se utiliza la integración heredada `@astrojs/tailwind` de Tailwind 3.
- **TypeScript 6.0:** compatible con `@astrojs/check` y typescript-eslint instalados. No actualizar a otra versión mayor sin revisar sus peer dependencies.
- **ESLint 10:** plugin de Astro y `eslint-plugin-jsx-a11y-x` para mantener compatibilidad entre lint y accesibilidad.
- Dependencias directas con versiones exactas y lockfile. Solo npm; no generar lockfiles de otros gestores.
- Sin fuentes, servicios ni imágenes remotas: la demo puede funcionar sin cuentas o claves.
- Sin variables de entorno: por eso no hay `.env.example`. Si agregas una integración, crea ese archivo con nombres y valores ficticios, y documenta qué es público y qué es secreto. Nunca publiques claves; los valores `PUBLIC_*` pueden llegar al navegador.

## Personalizar y reutilizar

1. Copia los archivos versionados a una carpeta nueva o usa **Use this template** cuando el repositorio se marque como plantilla en GitHub. No copies `node_modules`, `dist`, `.astro`, `.git`, `.tools`, `.npm-cache` ni `.qa` al crear un proyecto independiente.
2. Cambia `name` y `description` en `package.json`. Ejecuta `npm install --package-lock-only` si modificas el nombre, para sincronizar el lockfile.
3. Sustituye el contenido de `src/pages/index.astro`. Crea rutas con nuevos archivos en `src/pages`.
4. Ajusta navegación y pie en `src/components`, y los tokens de color y tipografía de `src/styles/global.css`.
5. Actualiza marca y favicon en `src/assets/mark.svg` y `public/favicon.svg`.
6. Actualiza títulos y descripciones en cada página y los valores predeterminados de `BaseLayout.astro`.
7. Cuando conozcas el dominio de producción, añade `site: 'https://tu-dominio.com'` a `astro.config.mjs`. El layout generará canonical y `og:url` usando ese dominio. Sin `site`, se omiten para evitar publicar una URL ficticia. Cambia también idioma y locale si procede.
8. Antes de entregar cambios, ejecuta `npm run validate` y revisa escritorio, móvil, teclado y contador en navegador.

El contador admite valores entre 0 y 99, con botones para sumar, restar y reiniciar, límites deshabilitados y anuncios de actualización mediante `output`. No persiste el valor al recargar.

## Git y GitHub

Git conserva el historial local; GitHub aloja el repositorio y permite revisar pull requests. Esta entrega no publica un repositorio, no configura un remoto y no despliega.

Si trabajas desde una copia sin `.git`, inicializa:

```powershell
git init -b main
```

Si aún no tienes identidad, configúrala para este repositorio con tu nombre y correo reales:

```powershell
git config user.name "Tu nombre"
git config user.email "tu-correo@example.com"
```

Cuando revises el contenido, crea el primer commit:

```powershell
git add .
git commit -m "chore: crear plantilla Astro"
```

Cuando decidas publicar, crea un repositorio vacío en GitHub, sin README inicial, y configura su URL real como `origin` antes de hacer `git push -u origin main`.

Para cambios posteriores:

```powershell
git switch main
git pull --ff-only
git switch -c feat/nueva-seccion
# Realiza tus cambios
npm run validate
git add .
git commit -m "feat: agregar nueva sección"
git push -u origin feat/nueva-seccion
```

Abre un PR hacia `main`, describe el comportamiento y las verificaciones, revisa CI y luego integra. Si estás trabajando solo sin remoto, omite `pull` y `push` hasta conectarlo.

El workflow de `.github/workflows/ci.yml` se ejecutará en pull requests, pushes a `main` y manualmente. Usa `npm ci`, Node 24 y permisos de solo lectura. Configurar la protección de `main` y exigir este check es un paso posterior en GitHub; el archivo por sí solo no activa esa protección. Para convertirlo en plantilla, activa **Template repository** en la configuración del repositorio.

## Despliegue posterior en Vercel

1. Publica primero el repositorio en GitHub.
2. En Vercel, selecciona **Add New → Project**, conecta GitHub y autoriza el repositorio.
3. Importa el repositorio y verifica estos valores:

| Ajuste               | Valor                                |
| -------------------- | ------------------------------------ |
| Framework Preset     | Astro                                |
| Root Directory       | Raíz del proyecto (`./`)             |
| Install Command      | `npm ci`                             |
| Build Command        | `npm run build`                      |
| Output Directory     | `dist`                               |
| Node.js Version      | `24.x`, coherente con `package.json` |
| Production Branch    | `main`                               |
| Variables de entorno | Ninguna para esta plantilla          |

4. Despliega y comprueba inicio, hidratación del contador y una ruta inexistente para la página 404.
5. Conecta el dominio definitivo y configura `site` en Astro antes de recompilar.

Vercel administra actualizaciones menores y parches de Node; se alinea la versión mayor, no un parche exacto. Las ramas pueden generar despliegues de vista previa con la integración Git; revisa la configuración y los accesos del proyecto. Vercel y GitHub Actions son procesos independientes: pasar CI no es una barrera automática para desplegar, salvo que configures esa política.

Para incorporar rutas renderizadas bajo demanda en el futuro, instala el adaptador con `npm run astro -- add vercel`, revisa los requisitos del adaptador y configura solo las rutas necesarias. Documenta las variables, el nuevo comportamiento y vuelve a validar; la plantilla actual permanece estática.

## Comprobaciones y límites

La verificación de esta entrega se registra en `VERIFICACION.md`. CI remoto, permisos del repositorio, dominio y despliegue real se comprueban después de conectar las cuentas. El lint de accesibilidad es una revisión estática y no sustituye pruebas con lectores de pantalla.

En la sesión de creación npm no estaba en el PATH. Se descargó una copia local en `.tools/` y se usó `.npm-cache/`, ambas ignoradas por Git. No son dependencias de la plantilla ni se necesitan al clonar con Node y npm instalados normalmente.

En esta copia local puedes iniciar el proyecto inmediatamente con el comando de abajo. Ese ejecutable auxiliar apunta al runtime de esta sesión; para otras máquinas utiliza la instalación normal de Node y npm.

```powershell
.\.tools\bin\npm.cmd run dev
```

## Referencias oficiales

- [Instalación y requisitos de Astro](https://docs.astro.build/en/install-and-setup/)
- [React en Astro](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Tailwind en Astro](https://docs.astro.build/en/guides/styling/#tailwind)
- [Desplegar Astro en Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Versiones de Node.js en Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [actions/setup-node](https://github.com/actions/setup-node)
