const feiImage = "/images/build-fei/wizard.png";

export const BuildFeiView = () => {
  return (
    <main className="relative h-full w-full overflow-hidden bg-elevation-surface">
      <img
        src={feiImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-none translate-y-[6.4%] select-none"
      />
      <h1 className="absolute inset-x-0 top-[68%] z-10 text-center font-primary-black text-5xl text-[var(--Red600)]">
        Build Fei
      </h1>
    </main>
  );
};
