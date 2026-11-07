import { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[clamp(3rem,18vw,14rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
