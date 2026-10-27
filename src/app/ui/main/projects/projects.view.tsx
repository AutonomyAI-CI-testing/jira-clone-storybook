import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(4rem,15vw,11rem)] leading-none text-[var(--Green500)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
