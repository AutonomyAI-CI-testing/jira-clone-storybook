// Standalone page: no layout, no header, no session needed — a plain white
// page with a single word centered in it.
export default function FeiRoute() {
  return (
    // The page is a fixed white surface, so it pins the light palette: the red
    // below then reads the same whatever theme the rest of the app is in.
    <main className="light flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
