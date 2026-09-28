// Standalone page: plain white surface with a single centered word.
// Intentionally theme-independent (literal white/black) because the page
// is specified as always white with black type.
export const FeiView = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </div>
  );
};
