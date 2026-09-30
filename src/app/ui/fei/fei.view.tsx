export const FeiView = () => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-white">
      {/* Literal red on purpose: this page is white in every theme, so the
          theme's danger token would remap to the pale dark-mode tint here. */}
      <h1 className="font-primary-black text-8xl text-[#ca3521]">Fei</h1>
    </div>
  );
};
