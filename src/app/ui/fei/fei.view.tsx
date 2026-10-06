export const FeiView = (): JSX.Element => {
  // This page is deliberately theme-independent: a fixed white sheet with a
  // single wordmark. `light` pins the colour tokens to their light values so
  // the red stays readable on the white background instead of lightening
  // towards a pale tint in the dark themes.
  return (
    <div className="light flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
    </div>
  );
};
