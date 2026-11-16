import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the `__main` layout on purpose, so it renders
// without the header or sidebar. The colors are fixed rather than semantic
// tokens, because this page is always white: the semantic aliases are redefined
// per theme (--color-font-danger resolves to #ff9c8f under .dark, .lava, .lime
// and .barbie), which would wash out on a permanently white surface. The red is
// the palette's own --Red600, stable across all six themes.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
