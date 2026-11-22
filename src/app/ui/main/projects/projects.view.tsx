import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Full-screen takeover: the page is a plain black canvas with the app
          name centred, so it sits above the header rather than below it. */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-icon-accent-green md:text-9xl">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
