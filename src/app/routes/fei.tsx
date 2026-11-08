import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// A deliberately minimal, theme-independent page: a fixed white surface with a
// single centred word. `bg-white` and the raw `--Red600` palette step are fixed
// values, so the page looks the same under every app theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
