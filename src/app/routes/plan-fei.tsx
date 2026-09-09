import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  const title = "Plan Fei";
  const description = "Plan Fei — a whimsical robot wizard page.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
};

export default function PlanFeiRoute() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/plan-fei-bg.png)" }}
    >
      <h1 className="font-primary-black text-6xl [text-shadow:_0_2px_12px_rgb(255_255_255_/_80%)]">
        <span className="text-[#000000]">Plan</span>{" "}
        <span className="text-[#dc2626]">Fei</span>
      </h1>
    </div>
  );
}
