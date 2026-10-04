export const FeiView = () => {
  // The page is always white, so it is pinned to the light theme: otherwise
  // the themed red would wash out against the white background in the dark,
  // lava and lime themes.
  return (
    <div className="light flex h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
