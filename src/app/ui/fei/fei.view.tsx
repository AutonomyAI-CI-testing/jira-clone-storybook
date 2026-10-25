// Colours here are literal values from the palette rather than the
// theme-driven semantic tokens, so the page keeps the same white surface and
// black/red text in every theme.
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
};
