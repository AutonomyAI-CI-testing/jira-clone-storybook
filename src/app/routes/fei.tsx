import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="light flex h-full w-full items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-font-danger">Fei</span>
    </div>
  );
}
