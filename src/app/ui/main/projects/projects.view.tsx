import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <main className="flex flex-1 items-center justify-center bg-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </main>
  );
};
