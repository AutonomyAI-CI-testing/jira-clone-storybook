// Standalone page: plain white surface with a single centered word.
// The surface stays literal white (theme-independent) as specified, while
// the wordmark uses the design system's semantic red text token.
export const FeiView = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
};
