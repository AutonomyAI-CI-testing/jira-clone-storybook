import { Outlet } from "react-router";

/**
 * The projects page is a full screen takeover: a black page whose only
 * content is a single centred wordmark.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-font-success sm:text-9xl">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
