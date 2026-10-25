import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center bg-black">
      {/* Fixed green on a fixed black page: the semantic text/icon tokens resolve
          to a different green per theme, and this page is always black. */}
      <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
