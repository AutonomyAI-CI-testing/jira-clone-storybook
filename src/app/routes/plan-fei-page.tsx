import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Plan Fei" }];

export default function PlanFeiPageRoute() {
  return (
    <main className="relative h-full overflow-hidden bg-elevation-surface">
      <h1 className="pt-[7vh] text-center font-primary-black text-5xl text-[color:var(--Red600)]">
        Plan Fei
      </h1>
      <img
        src="/images/plan-fei-page.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[min(78vh,117vw)] w-auto translate-y-[6.4%]"
      />
    </main>
  );
}
