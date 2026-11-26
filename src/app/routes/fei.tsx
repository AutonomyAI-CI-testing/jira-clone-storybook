import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the main layout and outside the semantic
// theme tokens on purpose, so it keeps its own fixed colours (white page, red
// text) whatever theme the app is wearing.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
