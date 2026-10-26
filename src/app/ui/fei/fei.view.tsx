export const FeiView = () => {
  // The white background and the red type are fixed literals rather than theme
  // tokens on purpose: the page stays white in every theme, so a token that
  // remaps per theme (e.g. text-font-danger, Red300 in dark) would lose its
  // contrast against it.
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[#e34935]">Fei</h1>
    </div>
  );
};
