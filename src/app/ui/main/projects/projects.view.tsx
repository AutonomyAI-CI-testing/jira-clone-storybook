import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Fixed-look surface: the theme is pinned so the green reads the same in
          every one of the five themes. */}
      <div className="light fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
