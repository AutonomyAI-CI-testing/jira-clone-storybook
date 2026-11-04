import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Pinned to a single theme on purpose: this surface is a fixed black page
          under all five app themes. */}
      <div className="light flex flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-7xl text-icon-accent-red">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
