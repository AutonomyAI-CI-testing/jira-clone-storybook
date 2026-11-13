// A plain, standalone page: it sits outside the app shell (`routes/__main.tsx`),
// so there is no header or sidebar, and it is theme-independent by design.
// The white background and black text come from the Tailwind config's `white`
// and `black` entries rather than the semantic theme tokens, which would flip
// with the active theme (dark, lava, lime, barbie).
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
}
