export const BuildFeiView = (): JSX.Element => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      {/* Background: wizard robot image centered, covering the area */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/build-fei-wizard.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.15,
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Wizard image in full colour */}
        <img
          src="/images/build-fei-wizard.png"
          alt="Fei the wizard robot"
          className="h-64 w-auto drop-shadow-lg"
        />

        {/* "Build Fei" heading in green */}
        <h1
          className="font-primary-black text-[7rem] leading-none tracking-tight"
          style={{ color: "#22a06b" }}
        >
          Build Fei
        </h1>
      </div>
    </div>
  );
};
