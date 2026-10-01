/**
 * Standalone single-word page.
 *
 * Deliberately pinned to literal white/red instead of the semantic
 * `bg-elevation-surface` / `text-font` tokens: the page is specified as a plain
 * white canvas whose colours stay the same in every theme. The red is the
 * design system's text-danger value (--Red800, #ae2a19) written literally so it
 * cannot flip to the dark theme's light red.
 */
export const FeiView = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-[#ae2a19]">Fei</span>
    </main>
  );
};
