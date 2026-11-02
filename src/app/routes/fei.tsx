import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone splash page. It sits outside the `__main` layout on purpose: no
// header, no sidebar, no session required. The `light` class pins the theme so
// the surface stays white and the word keeps the same red whichever theme is
// selected (`text-font-danger` is the repo's red for text).
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
