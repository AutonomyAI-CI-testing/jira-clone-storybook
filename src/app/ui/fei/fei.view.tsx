// This page is a fixed white surface with fixed ink, so its colors are taken
// from the base palette rather than the semantic layer: a theme-aware token
// would shift the text to a pale red on the white background in dark themes.
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
