import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * A deliberately fixed-look page: one word, centred, in red on white.
 *
 * The app's semantic roles (bg-elevation-surface / text-font / text-font-danger)
 * re-resolve per theme, so this page pins the static bg-white utility and the raw
 * --Red600 palette step, which never flips. The `translate-y` nudge compensates
 * for a leading-none line box centring the box rather than the ink in
 * CircularStdBlack.
 */
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
