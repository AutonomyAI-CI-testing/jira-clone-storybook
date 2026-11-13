import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-8xl">Fei</h1>
    </main>
  );
}
