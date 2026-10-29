import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-9xl text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
