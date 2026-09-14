export const BuildFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-grow items-end justify-center overflow-hidden bg-[#0c1d3d] pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/build-fei/wizard.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <h1 className="relative font-primary-black text-6xl text-font-danger drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        Build Fei
      </h1>
    </div>
  );
};
