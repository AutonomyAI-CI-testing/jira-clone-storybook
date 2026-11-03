import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* No semantic role exists for a display red on a fixed black surface, so
          the raw palette step is used directly (--Red600 is theme-independent). */}
      <h1 className="font-primary-black text-9xl leading-none text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
