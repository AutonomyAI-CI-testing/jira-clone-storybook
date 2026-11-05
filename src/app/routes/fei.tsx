import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Deliberately bare page: white surface, one red word, nothing else.
// `bg-white` is the theme-independent literal in this repo's Tailwind config, and
// `--Red600` is a raw palette step declared once in :root, so neither flips with the
// active theme the way the semantic roles do.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
    </main>
  );
}
