// The page surface is always white, so the page is pinned to the light theme:
// that keeps --color-font-danger the red that is meant for a light surface.
export const FeiView = () => {
  return (
    <div className="light flex-center flex min-h-screen w-full bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
