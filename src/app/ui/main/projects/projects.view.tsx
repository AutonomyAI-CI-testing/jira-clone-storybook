import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(6rem,15vw,13rem)] leading-none text-font-success">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
