export function PlanFeiView() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-elevation-surface-sunken">
      {/* Mascot as full-bleed decorative background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src="/images/plan-fei-mascot.png"
          alt=""
          aria-hidden="true"
          className="h-full max-h-[700px] w-auto object-contain"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Mascot hero */}
        <img
          src="/images/plan-fei-mascot.png"
          alt="Fei the wizard robot mascot"
          className="h-64 w-auto drop-shadow-xl"
        />

        {/* Red heading */}
        <h1
          className="font-primary-black text-7xl font-black leading-tight tracking-tight"
        >
          <span style={{ color: "#0c66e4" }}>Plan</span>{" "}
          <span style={{ color: "#ff0000" }}>Fei</span>
        </h1>

        <p className="font-primary text-lg text-font-subtle">
          Your AI planning assistant is ready to cast some spells. ✨
        </p>
      </div>
    </div>
  );
}
