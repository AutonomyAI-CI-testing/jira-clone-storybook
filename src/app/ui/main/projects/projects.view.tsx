import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex w-full flex-1 items-center justify-center bg-black">
      {/* The page paints its own black surface, so the red is taken from the
          palette ramp: no semantic text role stays red on black in every theme. */}
      <h1 className="font-primary-black text-[clamp(4.5rem,12vw,10rem)] text-[var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
