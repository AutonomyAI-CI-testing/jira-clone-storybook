// Standalone page: no layout, no chrome. The surface is pinned white, so its
// colour is pinned too: `white` is a token-system literal, and the red comes
// from the raw palette (--Red600) rather than `font-danger`, which resolves to
// a pale step under the dark themes and would wash out on a white page.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
