import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Pinned to the light theme: this page is a plain white surface in every theme.
export default function FeiRoute() {
  return (
    <div className="light flex h-full items-center justify-center bg-elevation-surface text-font">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
