import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

/**
 * A standalone, chrome-free page: one word centred on a plain white plane.
 *
 * It is registered as a top-level route, outside the `__main` layout, so the app
 * header and the session gate are both absent and nothing but the word renders.
 *
 * The surface deliberately uses the static `bg-white` utility and the raw `--Red600`
 * palette step instead of theme tokens: the page has to keep the same white plane
 * and the same red word in all five themes.
 */
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      {/* The em-based nudge compensates for a `leading-none` line box centring the
          box rather than the CircularStdBlack ink. */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
