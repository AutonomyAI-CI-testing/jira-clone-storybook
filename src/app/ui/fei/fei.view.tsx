// Standalone splash page. It deliberately opts out of the theme tokens:
// the white background and the red text stay the same in every theme.
// #ca3521 is the red the design system declares for danger.
export const FeiView = () => {
  return (
    <div className="flex h-full bg-white flex-center">
      <h1 className="font-primary-black text-5xl text-[#ca3521]">Fei</h1>
    </div>
  );
};
