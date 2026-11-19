import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// The page paints its own fixed white ground, so it opts into the light
// theme: without it `text-font-danger` would resolve to the light-red step
// (--Red300) in the dark, lava and lime themes and read as washed out here.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
