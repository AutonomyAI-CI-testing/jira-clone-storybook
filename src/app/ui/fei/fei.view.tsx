// The page is permanently white, so it pins the light theme on itself:
// --color-font-danger then resolves to the dark red that stays legible on
// white, instead of the pale red the dark and colored themes use.
export const FeiView = () => {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
