// A deliberately plain standalone page: one word, centred, on a fixed white
// surface. `bg-white` is the theme-independent literal declared in
// tailwind.config.js, and the red is the raw palette var `--Red600` — declared
// once in `:root` and never re-mapped per theme, so the page keeps the same look
// under every theme instead of following the semantic `--color-font`.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
