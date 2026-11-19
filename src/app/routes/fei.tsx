import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex min-h-screen w-full bg-white flex-center">
      <h1 className="font-primary-black text-8xl text-[var(--Red800)]">Fei</h1>
    </main>
  );
}
