import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone screen: a plain white page with a single centered word.
// It deliberately sits outside the main layout so it renders no header or sidebar.
// The `light` class pins the light token scope on the page, so its white
// background and red word stay the same whatever theme the app is in.
export default function FeiRoute() {
  return (
    <main className="light flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl leading-none text-font-danger">
        Fei
      </h1>
    </main>
  );
}
