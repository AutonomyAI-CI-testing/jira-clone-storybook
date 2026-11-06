// Standalone, theme-independent page: white surface, one word, nothing else.
// `bg-white` / `text-black` are declared literals in tailwind.config.js, so the
// page keeps its colour under every theme class on <html>.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </main>
  );
}
