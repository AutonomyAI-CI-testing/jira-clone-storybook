import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl leading-none text-black">
        Fei
      </h1>
    </div>
  );
}
