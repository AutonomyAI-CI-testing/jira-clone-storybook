import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-40 grid place-items-center bg-black">
        <h1 className="font-primary-black text-[clamp(4rem,15vw,14rem)] leading-none text-font-danger">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
