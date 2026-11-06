import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A deliberately minimal standalone page: one word on a white plane.
// Registered at the top level of `routes.ts`, so it renders with no app chrome
// and no session. `bg-white` is a declared literal and `text-[var(--Red600)]`
// reaches the raw palette, which no theme class re-declares — so the page looks
// the same in all five themes.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
