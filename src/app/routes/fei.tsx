import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-7xl text-[var(--Red600)]">Fei</h1>
    </main>
  );
}
