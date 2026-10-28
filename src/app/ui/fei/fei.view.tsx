export const FeiView = () => {
  // The page is white in every theme, so it is pinned to the light theme
  // tokens to keep its colours the same whatever theme the app is in.
  return (
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
