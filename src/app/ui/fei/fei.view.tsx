// A deliberately bare page: white background, one word centered, nothing else.
// It opts out of the themed surface tokens on purpose so it stays white/black
// regardless of the selected theme.
export const FeiView = () => (
  <div className="flex min-h-screen w-full items-center justify-center bg-white">
    <h1 className="font-primary-black text-8xl text-black">Fei</h1>
  </div>
);
