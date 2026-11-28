export const FeiView = () => {
  // The page is always a light surface (fixed white background), so it keeps
  // the light theme's tokens instead of following the app theme, which would
  // otherwise turn the red into a washed-out variant on the white background.
  return (
    <main className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </main>
  );
};
