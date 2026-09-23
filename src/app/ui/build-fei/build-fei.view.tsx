export const BuildFeiView = (): JSX.Element => {
  return (
    <div
      className="relative flex h-full min-h-screen w-full items-center justify-center bg-elevation-surface bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/fei/wizard.png)" }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <h1 className="relative font-primary-black text-6xl text-font-danger">
        Build Fei
      </h1>
    </div>
  );
};
