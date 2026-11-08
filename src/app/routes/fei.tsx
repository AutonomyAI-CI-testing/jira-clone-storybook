import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * Standalone splash page: registered at the top level of the route table, so it
 * renders with no app chrome and needs no session. The white surface is the
 * `bg-white` literal and the red is the raw `--Red600` palette step — neither is
 * re-mapped by a theme class, so the page looks the same in all five themes
 * (`text-font-danger` would resolve to a different red in each).
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
