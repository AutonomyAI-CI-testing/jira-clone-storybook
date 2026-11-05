import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[clamp(4rem,15vw,14rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
