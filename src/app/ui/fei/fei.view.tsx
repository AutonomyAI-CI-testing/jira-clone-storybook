export const FeiView = () => {
  return (
    // The page is a fixed white surface, so it pins the `light` theme and
    // declares its own text colour instead of inheriting the session theme.
    <div className="light flex h-full items-center justify-center bg-elevation-surface text-font">
      <span className="font-primary-black text-5xl text-font-danger">Fei</span>
    </div>
  );
};
