export const FeiView = () => {
  return (
    // This page is deliberately a fixed light surface (white background), so it
    // is pinned to the light theme's tokens rather than following the app theme.
    <div className="light flex h-full min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
