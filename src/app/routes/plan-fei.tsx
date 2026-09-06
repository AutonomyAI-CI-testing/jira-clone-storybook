import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Plan Fei" },
    { name: "description", content: "Plan Fei" },
  ];
};

export default function PlanFeiRoute() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url(/images/robot-wizard.png)" }}
      />
      <h1 className="relative z-10 text-6xl font-bold text-font-danger">
        Plan <span className="text-font-success">Fei</span>
      </h1>
    </div>
  );
}
