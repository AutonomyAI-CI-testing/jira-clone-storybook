import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </main>
  );
}
