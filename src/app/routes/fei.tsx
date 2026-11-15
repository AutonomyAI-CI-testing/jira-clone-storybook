import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    // The page pins the light palette: the white background and the red word
    // stay the same whichever app theme is active.
    <div className="light flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-font-danger">Fei</span>
    </div>
  );
}
