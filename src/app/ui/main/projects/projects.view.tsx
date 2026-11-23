import { Outlet } from "react-router";

/**
 * The projects page is a full-screen wordmark splash: a black page showing only
 * "Fei", centered, in large green type. It is fixed to the viewport so the app
 * header behind it is not visible.
 *
 * The green is the raw ramp step (--Green500) instead of the theme-dependent
 * `font-success` alias, so the wordmark stays green on black in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 grid place-items-center bg-black">
        <h1 className="font-primary-black text-[clamp(6rem,22vw,18rem)] leading-none text-[color:var(--Green500)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
