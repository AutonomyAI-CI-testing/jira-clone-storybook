import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

/**
 * Minimal standalone page: a white surface with a single word centred on it.
 * It sits outside the main layout, so it renders without the header or sidebar,
 * and it pins the `light` theme so the surface stays white whichever theme the
 * app is currently using.
 */
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface text-font">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
