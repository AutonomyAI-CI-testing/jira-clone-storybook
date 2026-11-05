import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no app chrome, just the word centred on a white background.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white text-black">
      <h1 className="font-primary-black text-5xl">Fei</h1>
    </div>
  );
}
