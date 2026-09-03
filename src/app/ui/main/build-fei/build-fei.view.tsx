export const BuildFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full w-full flex-grow items-center justify-center overflow-hidden bg-elevation-surface">
      {/* Wizard robot background illustration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <img
          src="/images/fei-wizard.png"
          alt=""
          aria-hidden="true"
          className="h-full max-h-[700px] w-auto object-contain"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Wizard robot mascot */}
        <img
          src="/images/fei-wizard.png"
          alt="Fei the Wizard Robot"
          className="h-auto w-[260px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
        />

        {/* Bold red "Build Fei" heading */}
        <h1
          className="font-primary-black leading-none tracking-tight"
          style={{
            color: "#ca3521",
            fontSize: "8rem",
            textShadow: "0 4px 24px rgba(202,53,33,0.25)",
          }}
        >
          Build Fei
        </h1>
      </div>
    </div>
  );
};
