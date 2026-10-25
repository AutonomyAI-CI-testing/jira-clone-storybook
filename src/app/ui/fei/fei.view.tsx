/**
 * Standalone page holding a single word, centred on a plain white surface.
 *
 * The colours are fixed on purpose rather than taken from the semantic tokens:
 * the page is specified to look the same in every theme, and the token layer is
 * theme-aware by design — `--color-elevation-surface` resolves to a near-black
 * in `dark`, and `--color-font-danger` to a pale salmon that would barely read
 * on this page's white. White and black are declared in `tailwind.config.js`;
 * the red is the palette's own `--Red600`, so the ramp stays the single source
 * of truth for the value.
 *
 * The word is set in the heaviest CircularStd cut (`font-primary-black`, the
 * family the design system reserves for display statements) at `text-7xl`,
 * which is what "large" maps to on the Tailwind scale this repo runs on.
 */
export const FeiView = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
