import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  // The page always paints white, so pin the light theme: --color-font-danger
  // resolves to a pale Red300 in the dark, lava and lime themes, which would
  // read as pink on this background.
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <p className="font-primary-black text-5xl text-font-danger">Fei</p>
    </div>
  );
}
