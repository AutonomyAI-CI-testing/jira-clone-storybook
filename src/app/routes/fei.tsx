import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A standalone page: no app shell, just the word on a white ground.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white font-primary-black text-black">
      <h1 className="text-5xl">Fei</h1>
    </main>
  );
}
