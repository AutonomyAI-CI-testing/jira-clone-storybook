import { Outlet } from "react-router";

/**
 * The projects page is a single wordmark on a black surface, covering the
 * viewport. The splash is deliberately identical in every theme, so it names
 * fixed colours — literal black and the raw palette red — rather than the
 * themeable surface/font roles.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      {/* The word has to dominate the page, so it scales with the viewport
          instead of sitting on the type scale's display step. */}
      <h1 className="font-primary-black text-[clamp(4rem,15vw,12rem)] leading-none text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
