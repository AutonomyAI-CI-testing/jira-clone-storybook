import { Outlet } from "react-router";

/**
 * The projects index is a page of its own: a black surface with the product
 * name in the middle and nothing else on it. `MainLayout` hides the app header
 * for this route, so what is rendered here is all the page shows.
 *
 * The black surface and the red name are deliberate one-offs that sit outside
 * the theme token layer, so they read the same in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#ff0000]">Fei</h1>
      <Outlet />
    </div>
  );
};
