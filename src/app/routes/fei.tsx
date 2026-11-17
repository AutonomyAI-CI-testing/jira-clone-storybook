import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * Standalone page: an always-white surface with the word "Fei" centred in it.
 *
 * The colours are intentionally fixed rather than semantic tokens: the
 * semantic set (bg-elevation-surface / text-font / text-font-danger) flips
 * with the active theme, and this page is specified to stay white with red
 * text in every theme. Both values are palette tokens, which are declared
 * once in :root and therefore do not change with the theme.
 */
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-[var(--Neutral0)]">
      <h1 className="font-primary-black text-8xl text-[var(--Red600)]">Fei</h1>
    </div>
  );
}
