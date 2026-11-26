export const BuildFeiView = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden pb-4">
      <h1 className="relative z-10 mt-[3vh] text-center font-primary-black text-5xl text-font-danger">
        Build fei
      </h1>
      <img
        src="/images/build-fei-mascot.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none mt-3 min-h-0 w-full flex-1 select-none object-contain object-bottom"
      />
    </div>
  );
};
