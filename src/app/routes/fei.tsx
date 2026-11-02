import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Fixed white surface: the page is intentionally pinned to the light theme so
// it looks identical under every theme. Do not add anything else to it.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
