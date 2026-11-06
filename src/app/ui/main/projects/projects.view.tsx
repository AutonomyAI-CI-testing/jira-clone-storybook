import { Outlet } from "react-router";

/**
 * The projects page is a single full-height surface showing the product name.
 * It is deliberately identical in every theme, so it names fixed colours — a
 * black surface and a raw palette green — rather than the themeable surface and
 * font roles.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center bg-black">
      {/* A page-level statement has no step on the type scale, so the word is
          sized against the viewport. The nudge centres the ink: in this family
          the glyphs sit above the middle of a `leading-none` line box. */}
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
