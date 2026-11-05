import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * A deliberately bare full-page screen: registered at the top level of
 * `routes.ts`, so it renders with no app chrome and no session.
 *
 * The surface and the ink are pinned on purpose, so the page looks the same in
 * every theme: `bg-white` is a declared literal, and the red is the raw palette
 * step `--Red600` (#e34935, this repo's own red) reached as an arbitrary value,
 * because every `--color-*` role re-resolves per theme.
 */
export default function Fei() {
  return (
    <div className="flex h-full items-center justify-center bg-white text-[color:var(--Red600)]">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </h1>
    </div>
  );
}
