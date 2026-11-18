import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Deliberately plain, theme-independent page: a white ground with a single
// red word. `bg-white` is declared on top of the semantic token scale in
// tailwind.config.js, so the page keeps the same white in every app theme.
// The red is the palette step the design system uses for `danger-bold`
// (--Red700), written directly rather than as `text-font-danger`, which
// resolves to a pale --Red300 under the dark, lava and lime themes and would
// lose its contrast against this fixed white page.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[var(--Red700)]">
        Fei
      </h1>
    </div>
  );
}
