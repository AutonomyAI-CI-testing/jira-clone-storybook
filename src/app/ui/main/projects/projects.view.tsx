import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      {/* The page owns its own fixed palette, so it stays the same in every theme. */}
      <h1 className="font-primary-black text-[10rem] leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
