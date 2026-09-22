export const PlanFeiView = (): JSX.Element => {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-end gap-4 bg-contain bg-top bg-no-repeat pb-16"
      style={{ backgroundImage: "url(/images/plan-fei-mascot.png)" }}
    >
      <h1 className="rounded bg-elevation-surface/80 px-6 py-3 font-primary-black text-6xl text-font-danger">
        Plan Fei
      </h1>
    </div>
  );
};
