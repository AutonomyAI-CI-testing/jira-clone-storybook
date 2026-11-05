import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        The projects page is a single full-viewport wordmark. Black and the raw
        Green600 palette step are used directly rather than a semantic role:
        this surface keeps one fixed look under every theme, and the
        theme-scoped roles would re-resolve to a different colour under
        dark/lava/lime.
      */}
      <div className="flex h-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
