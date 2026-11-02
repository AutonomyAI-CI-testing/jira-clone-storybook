import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="font-primary-black text-[8rem] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
