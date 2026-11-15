import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a plain white canvas holding a single centered word.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full flex-center bg-white">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
}
