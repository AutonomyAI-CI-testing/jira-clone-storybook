// This page is deliberately theme-independent: it stays white with red type in
// every theme, so the red comes from the palette rather than a semantic role
// (--color-font-danger resolves to a pale red in the dark themes, which would
// not read against this always-white surface).
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
