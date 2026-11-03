import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        The projects page is a single full-viewport wordmark, so this surface
        deliberately covers the app chrome. Black and the raw Green600 ramp
        step are used directly because the surface keeps one fixed look under
        every theme, and an inherited token colour would re-resolve inside it.
      */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
