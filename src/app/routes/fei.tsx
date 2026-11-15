import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page is a fixed white surface, so it stays in the light palette
    // instead of following the app theme and washing the red out in dark mode.
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}
