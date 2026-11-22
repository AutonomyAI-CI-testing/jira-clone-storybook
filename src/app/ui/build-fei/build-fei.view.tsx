export const BuildFeiView = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-elevation-surface">
      <img
        src="/images/build-fei.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/2 h-[78vh] w-auto max-w-none -translate-x-1/2 outline outline-2 outline-border-success"
      />
      <h1 className="relative mt-[8vh] font-primary-black text-5xl text-font-danger">
        Build Fei
      </h1>
    </div>
  );
};
