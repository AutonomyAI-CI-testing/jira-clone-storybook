import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: no header, no sidebar, nothing but the word on white.
// White, red and the type are pinned to fixed values rather than the
// themeable elevation-*/font-* tokens, so the page reads the same in all
// six themes. --Red800 is the value --color-font-danger resolves to in the
// light theme, so this is the repo's red for text on a light surface.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[var(--Red800)]">
        Fei
      </h1>
    </main>
  );
}
