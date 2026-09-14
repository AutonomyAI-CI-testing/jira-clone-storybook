import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { title: "Plan Fei" },
  ];
};

export default function PlanFeiRoute() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      {/* Wizard robot illustration */}
      <img
        src="/images/plan-fei-wizard.png"
        alt="Wizard robot mascot"
        className="pointer-events-none absolute inset-0 m-auto h-full max-h-[80vh] w-auto object-contain"
      />
      {/* Headline */}
      <h1 className="relative z-10 font-black" style={{ fontSize: "4rem", lineHeight: 1.1, color: "#000000" }}>
        Plan Fei
      </h1>
    </div>
  );
}
