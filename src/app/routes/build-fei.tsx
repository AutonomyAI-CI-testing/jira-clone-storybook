import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Build Fei" }];
};

export default function BuildFeiRoute() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-white bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/build-fei-wizard.png')" }}
    >
      <h1 className="text-6xl font-bold" style={{ color: "red" }}>
        Build <span style={{ color: "black" }}>Fei</span>
      </h1>
    </div>
  );
}
