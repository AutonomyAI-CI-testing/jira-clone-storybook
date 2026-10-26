export const FeiView = (): JSX.Element => {
  return (
    // `light` pins the semantic tokens for this page: its surface is always
    // white, so its colours must not flip with the app theme.
    <div className="light flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
    </div>
  );
};
