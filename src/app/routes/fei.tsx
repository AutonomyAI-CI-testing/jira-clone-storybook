import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute(): JSX.Element {
  // This page is deliberately theme-independent (always a white page), so the
  // text uses a fixed red. --color-font-danger remaps to a pale Red300 in the
  // dark/lava/lime themes, which is illegible on a white background.
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red800)]">
        Fei
      </h1>
    </main>
  );
}
