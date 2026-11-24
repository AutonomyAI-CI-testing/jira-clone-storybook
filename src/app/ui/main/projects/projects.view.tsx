import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex flex-center bg-black">
      <h1 className="font-primary-black text-9xl leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
