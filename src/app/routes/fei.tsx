// Standalone page: a single word, centered on a plain white surface.
// Deliberately theme-independent — the background is always white and the word
// is always the same red. It therefore uses the shared --Red800 palette value
// rather than a `--color-*` alias: those flip per theme, and the danger-text
// alias turns pale salmon under dark/lava/lime, which loses contrast on white.
// --Red800 is the value that alias takes in the light theme (6.7:1 on white).
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[color:var(--Red800)]">
        Fei
      </h1>
    </div>
  );
}
