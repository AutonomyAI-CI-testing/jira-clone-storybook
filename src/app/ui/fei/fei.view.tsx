// Deliberately theme-independent: the page is a fixed white canvas with red
// type, so it is pinned to the light token set and reads the same in every
// theme.
export const FeiView = () => {
  return (
    <div className="light flex h-screen items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
