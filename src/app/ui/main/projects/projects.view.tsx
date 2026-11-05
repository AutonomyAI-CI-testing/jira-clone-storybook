import { Outlet } from "react-router";

// The projects page is a full-bleed splash: it shows nothing but the title.
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(5rem,18vw,16rem)] leading-none text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
