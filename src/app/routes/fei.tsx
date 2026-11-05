import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A deliberately bare page: registered outside the `__main` layout, so it renders
// with no header, no sidebar and no session. Colours are pinned to `white` and the
// raw `--Red600` palette step rather than the theme tokens, so the page looks
// identical in all five themes (the `font-danger` role would re-resolve per theme).
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
