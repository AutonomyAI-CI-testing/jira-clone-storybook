import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Jira clone - Blan Fei" },
    { name: "description", content: "Blan Fei page." },
  ];
};

export default function BlanFeiRoute() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-white bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/blan-fei-bg.png)" }}
    >
      <h1
        className="font-primary-black text-8xl text-font-danger"
        style={{ textShadow: "0 0 12px #fff, 0 0 4px #fff, 0 2px 6px #fff" }}
      >
        Blan Fei
      </h1>
    </div>
  );
}
