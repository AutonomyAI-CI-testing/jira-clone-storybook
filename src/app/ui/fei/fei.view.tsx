// A deliberately bare page: one word, centered, on a white background.
// The white surface and black type are fixed values (not theme tokens), so
// the page looks the same whichever theme the user has selected.
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full bg-white flex-center">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
};
