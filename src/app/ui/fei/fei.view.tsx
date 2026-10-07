export const FeiView = () => {
  return (
    // The page is a permanently white surface, so it is scoped to the light
    // theme. The semantic tokens inside then resolve to their light values in
    // every user theme (dark, lava, lime, barbie) instead of washing out
    // against the white background.
    <div className="light flex h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
