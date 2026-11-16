import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  // Full-bleed page: covers the app shell so only the title is visible.
  return (
    <>
      <div className="dark fixed inset-0 z-20 grid place-items-center bg-black">
        <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
