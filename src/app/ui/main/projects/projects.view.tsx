import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* The projects index is a full-bleed wordmark screen: it covers the app
          shell so the page shows nothing but the wordmark. Child routes (the
          create project panel) still render through the outlet, above it. */}
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(4rem,16vw,12rem)] leading-none text-font-success">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
