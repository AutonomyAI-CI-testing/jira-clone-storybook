export const FeiView = () => {
  return (
    // The page is a fixed white sheet, so it pins itself to the light theme:
    // the semantic font tokens then stay readable in every app theme.
    <div className="light flex h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
