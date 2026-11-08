import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// A standalone page: registered at the top level of routes.ts, so it renders
// with no app chrome. The surface is deliberately theme-independent — the
// static `bg-white` / `text-black` utilities rather than the elevation and font
// tokens, which re-resolve per theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </div>
  );
}
