import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black leading-none text-[clamp(4rem,15vw,14rem)] text-[#ff0000]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
