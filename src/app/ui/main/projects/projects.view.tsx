import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-[length:clamp(4rem,16vw,14rem)] text-[#00ff00]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
