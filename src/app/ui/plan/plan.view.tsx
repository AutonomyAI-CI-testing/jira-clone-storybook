export const PlanView = (): JSX.Element => {
  return (
    <div className="relative flex h-full flex-col items-center overflow-hidden bg-elevation-surface px-6 pt-[12vh]">
      <img
        src="/images/plan-fei.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[74vh] w-auto -translate-x-1/2 select-none"
      />
      <h1 className="relative font-primary-black text-5xl text-font-danger">
        Plan Fei
      </h1>
    </div>
  );
};
