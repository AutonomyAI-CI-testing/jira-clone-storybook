export const FeiView = () => {
  return (
    // The page is intentionally theme-independent: a fixed white surface with a
    // fixed red word. The `light` scope keeps the tokens from flipping to their
    // dark-theme values when the app is running one of the dark themes.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
