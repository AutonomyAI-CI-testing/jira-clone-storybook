// This page is intentionally theme-independent: it keeps its own white paper
// and fixed type colour in every theme, so it uses literal colours rather than
// the semantic tokens (which re-map under dark/lava/lime/barbie).
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
};
