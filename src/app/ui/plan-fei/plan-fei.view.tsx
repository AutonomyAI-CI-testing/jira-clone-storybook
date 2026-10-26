export const PlanFeiView = (): JSX.Element => {
  return (
    <main className="relative flex h-full w-full flex-col items-center overflow-hidden bg-elevation-surface">
      <h1 className="relative z-10 mt-[7vh] font-primary-black text-5xl text-icon-danger outline outline-2 outline-offset-8 outline-black [-webkit-text-stroke:2px_black]">
        Plan Fei
      </h1>
      <img
        src="/images/plan-fei.png"
        alt=""
        aria-hidden="true"
        width={466}
        height={546}
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[88vh] w-auto max-w-none translate-y-[6.4%] select-none"
      />
    </main>
  );
};
