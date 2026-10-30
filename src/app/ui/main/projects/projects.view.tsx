import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex min-h-dvh items-center justify-center bg-black">
        <h1 className="font-primary-black text-[length:clamp(4rem,16vw,12rem)] leading-none text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
