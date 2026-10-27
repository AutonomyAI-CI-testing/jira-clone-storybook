export const FeiPageView = (): JSX.Element => {
  return (
    // This page keeps a fixed white background, so it is pinned to the light
    // palette. Without that, the theme's danger red would resolve to the dark
    // themes' lighter red and wash out against the white.
    <div className="light flex h-full min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
