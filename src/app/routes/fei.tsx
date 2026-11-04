import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page is deliberately white in every theme, so it pins the light
    // theme: without it, text-font-danger resolves to the dark theme's pale
    // red and loses contrast against the fixed white background.
    <div className="light flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
