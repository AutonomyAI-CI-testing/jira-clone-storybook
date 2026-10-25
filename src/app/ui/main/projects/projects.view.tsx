import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <span className="font-primary-black text-[12rem] leading-none text-[var(--Green600)]">
        Fei
      </span>
      <Outlet />
    </div>
  );
};
