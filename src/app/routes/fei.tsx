import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone screen: a plain white page with a single centered word.
// It deliberately sits outside the main layout so it renders no header or sidebar.
export default function FeiRoute() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl leading-none text-font-danger">
        Fei
      </h1>
    </main>
  );
}
