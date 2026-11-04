import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: white background, a single word centred on it.
// The `light` class pins the theme so the surface stays white in every theme.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font">Fei</h1>
    </div>
  );
}
