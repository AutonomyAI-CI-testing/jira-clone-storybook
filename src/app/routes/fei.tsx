import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Fixed white surface: pinned to the light theme so the page looks identical
// under every theme the app offers.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl leading-none text-font-danger">
        Fei
      </h1>
    </div>
  );
}
