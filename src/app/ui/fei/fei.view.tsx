// Standalone splash page. It deliberately opts out of the theme tokens:
// the white background and black text stay the same in every theme.
export const FeiView = () => {
  return (
    <div className="flex h-full bg-white flex-center">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
};
