export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface">
      <div className="flex flex-col items-center gap-8">
        <img
          src="/images/wizard-robot.png"
          alt="Wizard Robot"
          className="h-80 w-80 object-contain"
        />
        <h1 className="font-primary-black text-[3rem] leading-[1.2] text-font">
          Welcome
        </h1>
        <p className="max-w-sm text-center font-primary-light text-lg text-font-subtle">
          Your magical workspace awaits. Manage projects, track issues, and
          collaborate with your team — all in one place.
        </p>
      </div>
    </div>
  );
};
