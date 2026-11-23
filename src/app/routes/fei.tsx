import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a plain white surface with a single word, deliberately
// outside the app theme so it stays white in every theme. The word colour is
// pinned to the palette red (--Red700) rather than the theme-driven
// font-danger token, which resolves to Red300 in dark mode and would lose
// contrast against the page's fixed white background.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">Fei</h1>
    </main>
  );
}
