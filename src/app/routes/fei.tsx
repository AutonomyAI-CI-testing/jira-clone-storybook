// Standalone full-page screen: a plain white canvas with the name centred.
// The `light` class scopes the light theme variables to this page so the
// white surface and red text hold whatever theme the app is set to.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
