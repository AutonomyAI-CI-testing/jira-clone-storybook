import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Standalone full-page screen: a black page with the product name only.
          Pure black is not one of the theme tokens, so it is used literally. */}
      <div className="flex h-full w-full flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
