// Deliberately outside the theme system: this page is a plain white canvas
// with the word centred on it, so it stays white in every theme.
export const FeiView = () => {
  return (
    <div className="grid min-h-screen w-full place-items-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </div>
  );
};
