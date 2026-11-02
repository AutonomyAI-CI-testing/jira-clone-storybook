import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Deliberately bare: a white page with the single word centered in the
// product's red display type. The `light` class pins the theme so the
// surface stays white whichever theme the visitor has selected, and so the
// red resolves to the same value in every theme.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
