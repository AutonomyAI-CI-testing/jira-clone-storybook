import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* The page is a fixed black surface, so it is pinned to the dark theme
          instead of following the app theme. */}
      <div className="dark flex h-screen w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
