import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* A page surface that owns the whole viewport, so it does not depend on
          an ancestor height chain. It is pinned to one look under all five
          themes: the `black` literal plus a raw palette green, with its own
          text colour declared. */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
