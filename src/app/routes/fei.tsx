// A deliberately plain standalone page: one word, centred, on a fixed white
// surface. `bg-white` / `text-black` are the theme-independent literals declared
// in tailwind.config.js, so the page keeps the same look under every theme.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </main>
  );
}
