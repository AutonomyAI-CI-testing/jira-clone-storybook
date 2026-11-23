import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="grid h-full place-items-center">
        <h1 className="font-primary-black text-8xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
