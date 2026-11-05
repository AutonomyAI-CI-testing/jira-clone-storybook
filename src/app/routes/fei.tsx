import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Static standalone page: a plain white surface with a single centred wordmark.
// Registered outside the __main layout, so it renders with no header or sidebar.
// The wordmark colour is a raw palette step rather than a semantic role: the page
// is fixed white, so it must not re-resolve to the theme's danger tint.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </main>
  );
}
