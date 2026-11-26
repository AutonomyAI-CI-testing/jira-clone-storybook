import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a blank white canvas with a single centred word. It sits
// outside the __main layout on purpose, so no header, sidebar or navigation
// renders around it.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}
