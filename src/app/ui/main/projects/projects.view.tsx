import { Outlet } from "react-router";

/**
 * The projects screen is a full-bleed splash: a black page with the product
 * name centred in red, and nothing else on it. The nested `/projects/new`
 * route still renders through the outlet.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center bg-black">
      <h1 className="font-primary-black text-7xl text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
