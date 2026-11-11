// Standalone page: no layout, no header, no session needed — a plain white
// page with a single word centered in it.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </main>
  );
}
