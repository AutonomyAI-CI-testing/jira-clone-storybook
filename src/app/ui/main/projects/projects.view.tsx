import { Outlet } from "react-router";

/**
 * The projects screen is a single full-bleed black surface showing one word.
 * The `light` class pins the theme so the green stays the same colour under
 * every theme, and the `Outlet` keeps the `/projects/new` panel route working.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="light flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-font-success">Fei</h1>
      <Outlet />
    </div>
  );
};
