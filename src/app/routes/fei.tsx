import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  // This page pins its own colours (white background, red word) instead of the
  // theme tokens, so it renders the same under every theme.
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-5xl text-[#ca3521]">Fei</span>
    </div>
  );
}
