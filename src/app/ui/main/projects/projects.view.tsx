import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl leading-none text-font-success">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
