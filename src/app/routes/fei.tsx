import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// A deliberately bare page: one word, centred on a fixed white surface that
// looks the same in every theme — a literal `bg-white` and the raw palette red
// (`--Red600`), not the theme-dependent elevation/font roles, which re-resolve
// per theme.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
