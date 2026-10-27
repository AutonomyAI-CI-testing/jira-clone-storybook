import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  // This page is deliberately theme-independent: pinning the light theme keeps
  // its white surface and text colours the same in every theme.
  return (
    <main className="light flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
