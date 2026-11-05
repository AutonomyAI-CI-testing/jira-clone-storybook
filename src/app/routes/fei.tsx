import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: pinned white surface with a single red word.
// `bg-white` is a declared literal in the Tailwind config, and `--Red600` is a raw
// palette step, so both hold their value under every theme. The semantic
// `text-font-danger` role would re-resolve to a pale salmon under the dark themes.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </main>
  );
}
