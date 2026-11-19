import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Full-bleed page: it sits above the app header so the screen shows only the wordmark */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
