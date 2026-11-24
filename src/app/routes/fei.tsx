import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="flex h-full w-full bg-white flex-center">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
}
