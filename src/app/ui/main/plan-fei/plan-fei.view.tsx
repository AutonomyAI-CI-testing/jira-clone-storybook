export const PlanFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-elevation-surface p-6">
      <img
        src="/images/plan-fei-mascot.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[85%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-40 md:h-[100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elevation-surface/30 via-elevation-surface/70 to-elevation-surface/90"
      />
      <div className="relative z-10 rounded-lg bg-elevation-surface/80 px-8 py-6 text-center shadow-md">
        <h1
          className="font-primary-black text-4xl md:text-6xl"
          style={{ color: "#2DFF00" }}
        >
          Plan Fei
        </h1>
        <p
          className="mt-4 font-primary-light text-lg"
          style={{ color: "#0c66e4" }}
        >
          Your planning wizard is ready to help you organize what's next.
        </p>
      </div>
    </div>
  );
};
