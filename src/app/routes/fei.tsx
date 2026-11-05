import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a fixed white surface with a single word, identical under
// every theme. `bg-white` is a declared literal in tailwind.config.js and the
// red is the raw `--Red600` palette step, which no theme block re-declares —
// so nothing here resolves through the per-theme semantic tokens.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-6xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
