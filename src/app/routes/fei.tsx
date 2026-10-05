import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
}
