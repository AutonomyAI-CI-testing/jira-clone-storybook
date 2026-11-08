import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        The page is one full-viewport wordmark, so black and the raw Green600
        palette step are used directly: this surface keeps the same look under
        every theme, and a semantic token would re-resolve inside it.
      */}
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
