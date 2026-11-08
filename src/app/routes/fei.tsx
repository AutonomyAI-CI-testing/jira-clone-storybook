import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A deliberately fixed-look standalone page: white surface, red wordmark.
// It uses the static `bg-white` utility and the raw `--Red600` palette
// step, rather than the semantic elevation/font tokens, which re-resolve
// per theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
