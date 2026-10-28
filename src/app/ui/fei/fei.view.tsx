export const FeiView = () => {
  return (
    // The page is deliberately theme-independent: a white background with the
    // light theme's red. The `light` scope keeps the text readable in every
    // theme, since a theme-aware red would turn pale over the white surface.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-font-danger">Fei</span>
    </div>
  );
};
