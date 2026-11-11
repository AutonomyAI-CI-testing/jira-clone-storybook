// Standalone page: no layout, no header, no session needed — a plain white
// page with a single word centered in it.
// The `light` pin keeps the page's tokens resolved for its always-white
// background, whatever theme the rest of the app is using.
export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
