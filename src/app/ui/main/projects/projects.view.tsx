import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Full-screen splash: it covers the app header so the page shows only the wordmark. */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
