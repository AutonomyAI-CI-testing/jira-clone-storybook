export default function FeiRoute() {
  return (
    // The surface is pinned white in every theme, so the light theme is pinned
    // with it: a theme-scoped colour token would otherwise resolve to its
    // dark-theme value here and wash out against the white background.
    <div className="light grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
