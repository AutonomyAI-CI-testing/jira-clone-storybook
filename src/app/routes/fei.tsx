import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="flex h-full flex-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </div>
  );
}
