export const BuildFeiView = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a1f35 0%, #0c1628 40%, #0d2545 60%, #1a1f35 100%)",
      }}
    >
      {/* Stars background effect */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,220,100,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 35% 25%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,220,100,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 60%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 75% 20%, rgba(255,220,100,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 70%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 55%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 85%, rgba(255,220,100,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 42% 70%, rgba(255,220,100,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 35%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 88%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 90%, rgba(255,220,100,0.4) 0%, transparent 100%)
          `,
        }}
      />

      {/* Fei wizard robot illustration */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src="/images/fei-wizard.png"
          alt="Fei the wizard robot"
          className="w-64 drop-shadow-2xl md:w-80"
          style={{
            filter: "drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.5))",
          }}
        />

        {/* "Build Fei" text in red */}
        <h1
          className="select-none font-primary-black tracking-tight"
          style={{
            fontSize: "clamp(5rem, 12vw, 9rem)",
            color: "#ff2200",
            textShadow:
              "0 0 20px rgba(255, 60, 0, 1), 0 0 60px rgba(255, 40, 0, 0.85), 0 0 120px rgba(255, 20, 0, 0.5), 0 4px 16px rgba(0,0,0,0.7)",
          }}
        >
          Build Fei
        </h1>
      </div>
    </div>
  );
};
