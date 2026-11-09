import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: no app shell, a fixed white plane with a single centered
// word. It deliberately names the raw palette values instead of the semantic
// roles, so the page looks the same in every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <p className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </p>
    </div>
  );
}
