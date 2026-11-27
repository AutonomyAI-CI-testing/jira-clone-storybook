import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a white canvas with the wordmark centered on it.
// Deliberately outside the MainLayout so nothing else is rendered around it.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
