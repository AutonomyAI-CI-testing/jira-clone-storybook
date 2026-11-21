import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: a single centered word on a white background, with no
// header, sidebar or any other chrome around it.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-6xl text-black">Fei</h1>
    </div>
  );
}
