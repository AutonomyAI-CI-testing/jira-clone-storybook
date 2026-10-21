import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanFeiRoute() {
  return (
    <main className="relative flex h-full w-full flex-col items-center overflow-hidden bg-elevation-surface">
      <h1 className="relative z-10 pt-[12vh] font-primary-black text-5xl text-[#008000]">
        Plan Fei
      </h1>
      <img
        src="/images/plan-fei.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[78vh] -translate-x-1/2 translate-y-[6.4%] object-contain"
      />
    </main>
  );
}
