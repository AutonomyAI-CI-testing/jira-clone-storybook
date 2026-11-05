import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: registered at the top level of routes.ts, so it renders
// without the app header/sidebar and without a session. The surface and the ink
// are pinned to a literal white and the raw `--Red600` palette step rather than
// theme tokens, so the page looks the same in all five themes.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
