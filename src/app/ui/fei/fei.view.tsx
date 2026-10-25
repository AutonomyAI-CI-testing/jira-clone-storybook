export const FeiView = () => {
  return (
    // The page paints a fixed white surface, so it pins the light palette and
    // keeps its semantic tokens resolving as they do on a light theme.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
