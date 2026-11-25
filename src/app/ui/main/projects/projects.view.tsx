import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex w-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black leading-none text-[clamp(4rem,18vw,14rem)] text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
