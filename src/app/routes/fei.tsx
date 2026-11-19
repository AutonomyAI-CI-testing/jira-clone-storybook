import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex min-h-screen w-full flex-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </main>
  );
}
