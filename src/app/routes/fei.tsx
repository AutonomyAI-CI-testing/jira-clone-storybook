import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // Literal colours on purpose: this page is pinned to white, and the semantic
    // tokens would flip it to their dark-theme values under another theme.
    <div className="flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-7xl text-[#e34935]">Fei</span>
    </div>
  );
}
