// Standalone, theme-independent page: white surface, one word, nothing else.
// `bg-white` is a declared literal in tailwind.config.js and the red is the raw
// palette step `--Red600`, which `:root` declares once and no theme re-maps — so
// the page keeps its colour under every theme class on <html>.
//
// Deliberately not `text-font-danger`: that role resolves to --Red800 under the
// light theme but --Red300 under dark/lava/lime, so the accent would follow the
// viewer's session instead of staying one red.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
