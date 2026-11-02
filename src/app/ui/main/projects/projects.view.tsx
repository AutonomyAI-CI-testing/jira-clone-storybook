import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  // Full-bleed surface: it sits above the app header so the page shows nothing
  // but the title.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
