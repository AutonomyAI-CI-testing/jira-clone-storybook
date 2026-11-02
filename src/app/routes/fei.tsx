import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: white background with a single centered word.
// The `light` class pins the theme tokens to their light resolution so the
// page stays white and the word keeps its red under every user-selectable theme.
export default function FeiRoute() {
  return (
    <div className="light flex min-h-screen items-center justify-center bg-elevation-surface text-font">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
