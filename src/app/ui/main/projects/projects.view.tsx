import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[length:clamp(4rem,20vw,16rem)] text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      {/* Nested routes (e.g. /projects/new) still render here. */}
      <Outlet />
    </>
  );
};
