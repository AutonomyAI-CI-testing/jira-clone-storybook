import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: deliberately theme-independent. It uses the `white` literal
// and the raw --Red600 palette step rather than the theme-scoped surface/font
// tokens, because --color-font-danger re-resolves to Red800/Red300 per theme.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
