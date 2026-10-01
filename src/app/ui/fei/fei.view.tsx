export const FeiView = () => {
  // Fixed colours on purpose: this page is theme-independent, so it uses the
  // design system's light-surface text red (Red800) instead of the
  // theme-driven `text-font-danger`, which washes out against a white
  // background in the dark and accent themes.
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#ae2a19]">Fei</h1>
    </div>
  );
};
