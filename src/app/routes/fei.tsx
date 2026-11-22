import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* The page keeps a white ground in every theme, so its red is pinned to the
          palette ramp instead of the theme-remapped --color-font-danger. */}
      <h1 className="font-primary-black text-5xl text-[var(--Red800)]">Fei</h1>
    </div>
  );
}
