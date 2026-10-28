import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  // Full-viewport surface: the projects page shows nothing but the wordmark,
  // so it covers the header rendered by the main layout. It sits below the
  // dialog layer (z-50) so the create-project panel still opens above it.
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
