import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Deliberately plain, theme-independent page: a white ground with a single
// black word. `bg-white` / `text-black` are declared in tailwind.config.js
// because this page must stay white and black in every app theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}
