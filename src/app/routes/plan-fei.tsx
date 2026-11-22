import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanFeiRoute() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-elevation-surface">
      <h1 className="relative z-10 mt-[7vh] text-center font-primary-black text-5xl text-font">
        plan Fei
      </h1>
      <img
        src="/images/plan-fei.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[min(78vh,117vw)] w-auto translate-y-[6.4%]"
      />
    </div>
  );
}
