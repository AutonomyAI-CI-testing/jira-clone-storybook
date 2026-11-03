import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <span className="font-primary-black text-[6rem] leading-none text-icon-accent-green">
          Fei
        </span>
      </div>
      <Outlet />
    </>
  );
};
