import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Full-bleed page: covers the app header so the page shows nothing
          but the centred title. */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-8xl text-[#22a06b]">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
