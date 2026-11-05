import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

/**
 * A deliberately bare full-page screen: registered at the top level of
 * `routes.ts`, so it renders with no app chrome and no session.
 *
 * `bg-white` / `text-black` are used instead of the elevation/font tokens on
 * purpose — the surface and the ink must stay the same in every theme.
 */
export default function Fei() {
  return (
    <div className="flex h-full items-center justify-center bg-white text-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </h1>
    </div>
  );
}
