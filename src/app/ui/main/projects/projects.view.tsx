import { Outlet } from "react-router";

/**
 * The projects page is a full-screen canvas: a black background with the
 * wordmark centered on it. The app header is not rendered for it (see
 * MainLayout), so nothing else appears on the page.
 *
 * The background and the text color are deliberately literal: the page is
 * theme-independent, and the token set has no black surface and no red that
 * stays readable on black across all six themes.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-8xl text-[#ff0000]">Fei</h1>
      </div>
      <Outlet />
    </div>
  );
};
