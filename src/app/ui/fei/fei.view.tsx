/**
 * Standalone page holding a single word, centred on a plain white surface.
 *
 * `bg-white` / `text-black` are intentional here rather than the elevation and
 * font tokens: the page is specified to stay white with black text in every
 * theme, and the token system is theme-aware by design (in `dark` the surface
 * token resolves to a near-black). Tailwind's `white` / `black` are declared in
 * `tailwind.config.js`, so these are still theme values, not hex literals.
 *
 * The word is set in the heaviest CircularStd cut (`font-primary-black`, the
 * family the design system reserves for display statements) at `text-7xl`,
 * which is what "large" maps to on the Tailwind scale this repo runs on.
 */
export const FeiView = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-black">Fei</h1>
    </div>
  );
};
