/**
 * Standalone page with a single wordmark: the `white` canvas is asked for
 * directly rather than through a themed surface, so the page keeps its white
 * ground in every theme. The wordmark takes the palette's red through the
 * semantic `font-danger` token.
 */
export const FeiView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
