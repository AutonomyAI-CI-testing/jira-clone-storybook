export const PlanFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full min-h-screen items-center overflow-hidden bg-elevation-surface">
      <img
        src="/images/plan-fei.png"
        alt=""
        aria-hidden="true"
        width={466}
        height={546}
        className="pointer-events-none absolute bottom-0 right-[2vw] h-[78vh] w-auto select-none"
      />
      <h1 className="relative z-10 px-[8vw] font-primary-black text-6xl text-font-danger">
        Plan Fei
      </h1>
    </div>
  );
};
