import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  // This page opts out of theming: its colours are fixed so it stays white with
  // the same red whatever theme the app is in. The red is the palette's Red600
  // (#e34935), the accent red of the design system.
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
}
