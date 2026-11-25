import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <main className="flex min-h-screen bg-white flex-center">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </main>
  );
}
