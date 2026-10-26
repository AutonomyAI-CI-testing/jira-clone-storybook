import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        Full-screen black poster: it covers the whole viewport, app header
        included, so the route shows nothing but the wordmark. The accent green
        is a saturated green that stays legible on the always-black surface in
        every theme.
      */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
