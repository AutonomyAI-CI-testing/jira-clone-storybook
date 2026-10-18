import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no app shell (no header, no sidebar), nothing but the word.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}
