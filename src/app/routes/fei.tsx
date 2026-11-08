import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * Standalone page: registered outside the `__main` layout so it renders with no
 * app chrome and no session gate.
 *
 * The surface is deliberately pinned: `bg-white` and the raw palette red
 * (`--Red600`) are static values rather than theme roles, so the page looks
 * identical under all five themes. The `translate-y-[0.06em]` nudge optically
 * centres the ink of the CircularStdBlack line box, whose glyphs sit above the
 * box centre.
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
