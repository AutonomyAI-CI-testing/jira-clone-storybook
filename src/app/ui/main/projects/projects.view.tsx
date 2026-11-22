import { Outlet } from "react-router";

/**
 * The projects page is a full-screen wordmark: a black ground with a single
 * green "Fei" centred on it, and nothing else. It is deliberately theme-invariant,
 * so the green it draws with is pinned to a palette step that holds contrast on
 * black in `app.css` (.projects-splash) instead of the theme's success step.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="projects-splash flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(3rem,13vw,12rem)] leading-none text-font-success">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
