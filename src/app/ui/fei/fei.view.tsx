// A deliberately bare page: one word, centered, on a white background.
// The white surface and the red type are fixed values (not theme tokens), so
// the page looks the same whichever theme the user has selected. The red is
// the palette's Red600, which no theme re-declares -- the semantic
// text-font-danger token would wash out to a pale salmon on this white page.
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full bg-white flex-center">
      <h1 className="font-primary-black text-9xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
};
