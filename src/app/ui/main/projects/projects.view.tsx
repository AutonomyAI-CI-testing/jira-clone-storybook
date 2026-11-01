import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* The page is a fixed black surface, so this uses the brighter green
          step rather than the darker text green, which is tuned for light
          surfaces and turns murky here. */}
      <h1 className="font-primary-black text-5xl text-icon-accent-green">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
