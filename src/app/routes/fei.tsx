// Plain full-page view: a single word, centered, on a white surface.
// The `light` class pins the light theme's semantic tokens on this subtree so
// the page stays white and the word keeps its colour whatever theme the app is in.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
