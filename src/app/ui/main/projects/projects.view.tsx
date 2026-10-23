import { Outlet } from "react-router";

/**
 * The projects index is a bare splash screen: a black page with a single word
 * centred in it. It deliberately steps outside the themed surfaces, so the red
 * comes from the icon-danger role — `text-font-danger` resolves to a dark
 * maroon under the light theme, which is unreadable on a fixed black surface.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-icon-danger">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
