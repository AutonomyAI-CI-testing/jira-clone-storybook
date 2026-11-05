import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(5rem,20vw,18rem)] text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
