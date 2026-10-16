import { useState, useSyncExternalStore } from 'react';

const LIMIT = 99;
const subscribe = () => () => undefined;

export default function Counter() {
  const [count, setCount] = useState(0);
  // El HTML estático y la primera renderización coinciden; los controles se activan al hidratar.
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <div className="flex h-full min-w-0 flex-col rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow text-muted">Isla interactiva</span>
        <span className="flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 font-mono text-[10px] text-ink">
          <span
            className={`size-1.5 rounded-full ${ready ? 'bg-emerald-700' : 'bg-muted'}`}
          />
          {ready ? 'React activo' : 'Cargando React'}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight">
        Un clic para comprobarlo.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Este contador vive en React. El resto de la página se genera con Astro.
      </p>
      <div className="my-8 flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          aria-label="Restar uno"
          disabled={!ready || count === 0}
          onClick={() => setCount((value) => Math.max(0, value - 1))}
          className="size-12 rounded-full border border-line text-2xl transition-colors hover:bg-paper disabled:opacity-30"
        >
          <span aria-hidden="true">−</span>
        </button>
        <output
          aria-live="polite"
          aria-atomic="true"
          aria-label="Contador"
          className="min-w-16 text-center font-mono text-6xl font-medium tracking-tighter tabular-nums sm:min-w-24 sm:text-7xl"
        >
          {String(count).padStart(2, '0')}
        </output>
        <button
          type="button"
          aria-label="Sumar uno"
          disabled={!ready || count === LIMIT}
          onClick={() => setCount((value) => Math.min(LIMIT, value + 1))}
          className="size-12 rounded-full bg-accent text-2xl text-white transition-colors hover:bg-accent-dark disabled:opacity-30"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <code className="text-xs text-muted">
          &lt;Counter client:load /&gt;
        </code>
        <button
          type="button"
          disabled={!ready || count === 0}
          onClick={() => setCount(0)}
          className="min-h-10 px-1 text-xs font-semibold text-accent-dark hover:underline disabled:opacity-40"
        >
          Reiniciar ↺
        </button>
      </div>
      <noscript>
        <p className="mt-3 text-sm text-accent-dark">
          Activa JavaScript para probar el contador. El contenido del sitio
          sigue disponible.
        </p>
      </noscript>
    </div>
  );
}
