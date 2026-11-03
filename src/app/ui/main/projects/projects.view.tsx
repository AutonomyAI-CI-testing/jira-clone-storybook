import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* No semantic role exists for a display green on a fixed black surface, so
          the raw palette step is used directly (--Green600 is theme-independent). */}
      <h1 className="font-primary-black text-9xl leading-none text-[var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
