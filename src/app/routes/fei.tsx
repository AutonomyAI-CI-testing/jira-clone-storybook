import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <span className="font-primary-black text-9xl text-black">Fei</span>
    </div>
  );
}
