import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * Standalone page: a white surface with "Fei" centred on it.
 *
 * The `light` class scopes the light theme tokens to this page, so the
 * surface stays white whatever theme the app is set to.
 */
export default function FeiRoute() {
  return (
    <main className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
    </main>
  );
}
