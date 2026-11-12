import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[clamp(3.5rem,16vw,14rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
