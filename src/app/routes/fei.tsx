// Standalone page: no layout, no header, no session needed — a plain white
// page with a single word centered in it.
//
// The page is deliberately theme-independent, so it pins the light theme: the
// fixed white background and the red wordmark keep their intended contrast
// even when the app itself is in dark, lava, lime or barbie.
export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
