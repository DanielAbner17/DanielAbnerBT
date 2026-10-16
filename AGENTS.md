# Convenciones del proyecto

- Usa npm exclusivamente y conserva `package-lock.json`. Node.js 24 (mínimo 24.16).
- Instala con `npm ci`; desarrolla con `npm run dev`.
- Antes de entregar: `npm run validate` (tipos, lint, formato y build).
- Usa `npm run format` para aplicar Prettier, incluido el orden de clases Tailwind.
- Astro para páginas, layouts y contenido; React para estado e interacción. Hidrata solo los componentes que lo necesiten.
- TypeScript estricto; evita `any` y no desactives reglas para ocultar errores.
- Tailwind 4 mediante `@tailwindcss/vite`; tokens visuales en `src/styles/global.css`.
- Generación estática. Justifica cualquier adaptador o nueva dependencia.
- Mantén semántica HTML, navegación con teclado, foco visible y diseño móvil.
- No sobrescribas trabajo existente ni agregues credenciales. `.tools/`, `.qa/` y `.npm-cache/` son locales e ignoradas.
- Trabaja en ramas `feat/...` o `fix/...`; documenta cambios y comprobaciones en el PR hacia `main`.
- Actualiza el README si cambian comandos, estructura o despliegue.
- Distingue los checks locales de las ejecuciones reales de GitHub Actions y Vercel.
