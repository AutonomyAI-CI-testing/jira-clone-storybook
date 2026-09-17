import type { V2_MetaFunction } from "@remix-run/node";
import { formatTags, formatProperties } from "@utils/meta";

export const meta: V2_MetaFunction = () => {
  const title = "Plan Fei";
  const description = "Plan Fei — your wizard planning companion.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title,
    description,
  };

  const properties = {
    "og:title": title,
    "og:description": description,
  };

  return [{ title }, ...formatTags(tags), ...formatProperties(properties)];
};

export default function PlanFeiRoute() {
  return (
    <div
      className="flex h-screen w-full flex-col overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Header */}
      <header
        className="flex w-full items-center px-6 py-4"
        style={{ backgroundColor: "#1d2125", color: "#dee4ea" }}
      >
        <span
          className="text-lg font-bold"
          style={{ fontFamily: "CircularStdBold, sans-serif" }}
        >
          Header
        </span>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/images/plan-fei-mascot.png"
          alt="Plan Fei wizard mascot"
          className="w-[min(320px,60vw)]"
        />
        <h1
          className="text-center text-[clamp(3rem,8vw,6rem)] leading-none"
          style={{ fontFamily: "CircularStdBlack, sans-serif" }}
        >
          <span style={{ color: "#dc2626" }}>Plan </span>
          <span style={{ color: "#16a34a" }}>Fei</span>
        </h1>
      </div>
      </div>
    </div>
  );
}
