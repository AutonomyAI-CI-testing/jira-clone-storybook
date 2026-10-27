import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      {/* The "new project" route renders its dialog through this outlet. */}
      <Outlet />
    </>
  );
};
