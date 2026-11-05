import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(6rem,18vw,14rem)] leading-none text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
