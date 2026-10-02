export const FeiView = () => {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-white">
      {/* This page is deliberately theme-independent (always white), so the red is
          the Red600 primitive rather than text-font-danger, which remaps to a pale
          Red300 in the dark/lava/lime themes and would be illegible on white. */}
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
};
