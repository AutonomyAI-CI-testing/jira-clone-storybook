import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="text-center font-primary-black text-5xl text-black">
        Fei
      </h1>
    </main>
  );
}
