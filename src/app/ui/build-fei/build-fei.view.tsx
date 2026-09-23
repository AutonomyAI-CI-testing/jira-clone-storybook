export const BuildFeiView = (): JSX.Element => {
  return (
    <div
      className="relative flex h-full min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/fei/wizard.png)",
        backgroundColor: "#FF00FFFF",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <h1 className="relative font-primary-black text-6xl">
        <span className="text-[var(--Green500)]">Build</span>{" "}
        <span className="text-font-danger">Fei</span>
      </h1>
    </div>
  );
};
