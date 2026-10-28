import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/* Full-bleed black page. The dark theme is scoped here so the colour
          tokens resolve to saturated values that stay legible on black. */}
      <div className="dark flex h-full w-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(5rem,15vw,12rem)] text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
