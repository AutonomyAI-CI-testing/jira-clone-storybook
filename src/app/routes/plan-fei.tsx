import type { V2_MetaFunction } from "@remix-run/node";

const CRIMSON = "#A32020";
const HEADING_GREEN = "#1F8A3B";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Jira clone - Plan Fei" },
    { name: "description", content: "Plan Fei — a branded display page." },
  ];
};

export default function PlanFeiRoute() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-8"
      style={{ backgroundColor: CRIMSON }}
    >
      <div className="rounded-2xl bg-white px-10 py-6 shadow-xl">
        <h1 className="text-4xl font-bold" style={{ color: HEADING_GREEN }}>
          Plan Fei
        </h1>
      </div>
      <img
        src="/images/plan-fei-wizard.png"
        alt="Plan Fei wizard mascot"
        width={300}
      />
      <p className="text-3xl font-bold text-white">HEEEYYYyyy</p>
    </div>
  );
}
