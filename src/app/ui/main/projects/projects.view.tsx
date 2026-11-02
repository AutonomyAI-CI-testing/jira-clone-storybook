import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-[10rem] leading-none text-[#4bce97]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
