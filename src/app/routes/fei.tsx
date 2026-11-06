import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A deliberately minimal standalone page: one word on a white plane.
// Registered at the top level of `routes.ts`, so it renders with no app chrome
// and no session, and `bg-white` / `text-black` are declared literals here —
// they do not resolve through the theme, so the page looks the same in all five.
export default function FeiRoute() {
  return (
    <main className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-black">
        Fei
      </h1>
    </main>
  );
}
