import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the main layout and outside the theme
// tokens on purpose, so it stays white with black text in every theme.
export default function FeiRoute() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </main>
  );
}
