import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(4rem,18vw,16rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
