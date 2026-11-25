import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      {/* Palette red (Red600), not a theme token: this page keeps its white
          background in every theme, so a theme-dependent text colour would
          wash out against it in the dark themes. */}
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
