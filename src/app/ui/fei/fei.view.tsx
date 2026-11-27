export const FeiView = () => {
  return (
    // The page is a fixed white splash, so it is pinned to the light theme:
    // the red text token would otherwise resolve to a pale salmon on white in
    // the app's dark themes.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
