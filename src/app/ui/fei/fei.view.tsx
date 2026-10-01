export const FeiView = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      {/* Fixed red from the red ramp rather than the themed text-font-danger
          token: this page keeps a fixed white background, and the themed danger
          text lightens to a low-contrast salmon in the dark/lava/lime themes. */}
      <h1 className="font-primary-black text-8xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
};
