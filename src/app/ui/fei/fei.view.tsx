export const FeiView = () => {
  return (
    // The page is a fixed white surface, so it is pinned to the light palette
    // and its red stays legible whatever theme the app is in.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
    </div>
  );
};
