import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-[var(--DarkNeutral-100)]">
        <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      {/* Keeps the nested routes (create project panel) mounted. */}
      <Outlet />
    </>
  );
};
