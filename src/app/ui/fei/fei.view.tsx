export const FeiView = () => {
  // This page deliberately opts out of the app's theming (its background is
  // pinned to white), so the red is pinned to the palette value rather than the
  // theme-aware `text-font-danger` slot, which resolves to a pale salmon in the
  // dark-based themes and would lose contrast against the white page.
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
};
