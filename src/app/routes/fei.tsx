import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="flex flex-center h-full bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">
        Fei
      </h1>
    </div>
  );
}
