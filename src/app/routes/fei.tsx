import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // The page is deliberately theme-independent, so it pins the light
    // palette for its own subtree: a white ground, and the palette's vivid
    // red rather than the dark brick the danger text role resolves to.
    <main className="light flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
    </main>
  );
}
