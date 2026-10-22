import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-screen flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
