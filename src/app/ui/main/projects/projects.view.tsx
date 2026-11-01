import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(6rem,20vw,16rem)] leading-none text-font-danger">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
