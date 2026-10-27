// Standalone page: deliberately outside the main layout so nothing but the
// word renders on the page. The surface is pinned to the light theme so the
// fixed white background and the token-driven text colour stay the same
// whatever theme the app is set to.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
