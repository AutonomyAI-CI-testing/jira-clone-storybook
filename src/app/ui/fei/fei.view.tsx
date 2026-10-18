// This page is deliberately always white, so it pins the light theme instead
// of following the app's active theme. That keeps both the white surface and
// the red title readable whatever theme the rest of the app is using.
export const FeiView = () => {
  return (
    <div className="light flex min-h-screen items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl leading-none text-font-danger">
        Fei
      </h1>
    </div>
  );
};
