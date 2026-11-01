// This page keeps a fixed white surface, so its ink is a fixed red too —
// text-font-danger would resolve to a pale Red300 on the dark themes and
// wash out against the white.
export const FeiView = () => (
  <div className="flex min-h-screen w-full items-center justify-center bg-white">
    <h1 className="font-primary-black text-8xl text-[var(--Red700)]">Fei</h1>
  </div>
);
