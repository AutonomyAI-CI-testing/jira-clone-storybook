import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // The page is a fixed white surface, so it is pinned to the light theme.
    // Without the pin, `text-font-danger` would resolve to the dark theme's
    // pale red and read poorly against the white background.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-font-danger">Fei</h1>
    </div>
  );
}
