import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
