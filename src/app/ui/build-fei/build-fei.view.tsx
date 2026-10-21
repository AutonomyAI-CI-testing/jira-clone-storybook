const feiImage = "/images/build-fei/wizard.png";

export const BuildFeiView = () => {
  return (
    <main className="relative flex h-full w-full flex-col items-center overflow-hidden bg-elevation-surface">
      <img
        src={feiImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[88%] w-auto max-w-none translate-y-[6.4%] select-none"
      />
      <h1 className="relative z-10 pt-[7vh] text-center font-primary-black text-5xl text-[var(--Red600)]">
        Build Fei
      </h1>
    </main>
  );
};
