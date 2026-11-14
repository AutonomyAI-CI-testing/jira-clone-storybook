import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-black">Fei</span>
    </div>
  );
}
