import { Outlet } from "react-router";

/** The page is a single centred word on a black ground — no chrome, no list. */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-font-danger">Fei</h1>
      <Outlet />
    </div>
  );
};
