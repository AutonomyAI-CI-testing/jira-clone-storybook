// Standalone page: no layout, no header, no session needed — a plain white
// page with a single word centered in it. The page is pinned to the light
// theme because its white background is fixed, so the text colour has to be
// fixed too (the dark themes resolve the danger red to a pale tint that would
// be unreadable on white).
export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
