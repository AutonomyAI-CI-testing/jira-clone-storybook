import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    // Full-bleed black surface: the page shows nothing but the word, so it
    // covers the whole viewport rather than only the layout's content area.
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-font-success">Fei</h1>
      <Outlet />
    </div>
  );
};
