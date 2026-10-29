import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[var(--Green600)]">Fei</h1>
      <Outlet />
    </div>
  );
};
