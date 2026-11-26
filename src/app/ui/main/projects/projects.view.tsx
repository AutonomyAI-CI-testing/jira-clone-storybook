import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    // A deliberately theme-independent splash: pure black and the palette's own
    // green rather than a themeable semantic token, because the page is one
    // fixed state in every theme. The `min-h` keeps the black surface exactly as
    // tall as the viewport, with the main layout's 56px header above it.
    <div className="flex min-h-[calc(100vh-56px)] flex-1 flex-col bg-[#000000]">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-primary-black text-9xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      {/* Kept so the nested `/projects/new` route still renders its panel. */}
      <Outlet />
    </div>
  );
};
