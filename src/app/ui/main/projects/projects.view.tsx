import { Outlet } from "react-router";

/**
 * The projects page is a fixed black splash that shows the product name centred
 * and covers the viewport, header included. Because the surface is deliberately
 * identical in every theme, it names fixed colours instead of the themeable
 * surface/font roles.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      {/* The word has to dominate the page, so it scales with the viewport rather
          than sitting on the type scale's display step. */}
      <h1 className="font-primary-black text-[clamp(4rem,15vw,12rem)] leading-none text-[var(--Green500)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
