import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Plan Fei" }];
};

export default function PlanFeiDesignRoute() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-elevation-surface">
      <h1
        className="relative z-10 pt-[7vh] text-center font-primary-black text-5xl text-[color:var(--Red600)]"
      >
        Plan Fei
      </h1>
      <img
        src="/images/plan-fei-design.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[70vh] w-auto max-w-full translate-y-[5%] object-contain object-bottom"
      />
    </div>
  );
}
