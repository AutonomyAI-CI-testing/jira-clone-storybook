import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
