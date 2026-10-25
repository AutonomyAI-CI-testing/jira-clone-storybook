// This page is theme-independent by design: it keeps a white surface in every
// theme, so its text colour is pinned to the fixed --Red800 palette token
// instead of the themeable --color-font-danger, which resolves to a pale red
// on the dark themes and would lose contrast against the white surface.
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
};
