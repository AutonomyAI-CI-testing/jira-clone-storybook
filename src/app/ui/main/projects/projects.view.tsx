import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black">
      <h1 className="font-primary-black text-[clamp(4rem,16vw,14rem)] leading-none text-icon-accent-red">
        Fei
      </h1>
      {/* Child routes of this page, e.g. /projects/new, render here. */}
      <Outlet />
    </div>
  );
};
