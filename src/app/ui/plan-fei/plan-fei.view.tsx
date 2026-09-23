export const PlanFeiView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="font-primary-black text-5xl">
        <span className="text-font-success">Plan</span>{" "}
        <span className="text-font-danger">Fei</span>
      </h1>
      <img
        src="/images/plan-fei/wizard-robot.png"
        alt="Wizard-robot mascot wearing a starry hat and holding a wand"
        width={260}
        height={305}
        className="h-auto max-w-full"
      />
    </div>
  );
};
