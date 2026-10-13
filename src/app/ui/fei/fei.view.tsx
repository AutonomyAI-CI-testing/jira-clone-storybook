export const FeiView = () => {
  return (
    // This page is a fixed white surface, so the light theme tokens are scoped
    // to it: semantic colors keep their light-surface values no matter which
    // theme the rest of the app is in.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
