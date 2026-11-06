// Standalone, theme-independent page: a white surface with one word on it.
// `bg-white` is a declared literal in tailwind.config.js, and `--Red600` is a raw
// palette step no theme re-maps, so the page holds its colour under every theme
// class on <html> — a semantic role such as `text-font-danger` would flip.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
