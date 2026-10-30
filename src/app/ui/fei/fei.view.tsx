/**
 * Standalone splash page: a white surface with a single red wordmark.
 *
 * The colours are fixed rather than theme-driven on purpose — the page is
 * specified as white with red text, so it reads the same in every theme.
 * `--Neutral0` is this repo's white; `--Red600` is its semantic danger red,
 * the closest the palette has to a plain red.
 */
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[color:var(--Neutral0)]">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
