export const FeiView = () => (
  <div className="flex h-screen items-center justify-center bg-white">
    {/* The page is theme-independent (fixed white background), so the colour is
        taken from the raw palette rather than the per-theme semantic layer. */}
    <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
  </div>
);
