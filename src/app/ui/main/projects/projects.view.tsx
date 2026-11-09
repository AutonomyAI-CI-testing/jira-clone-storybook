import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <main className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(6rem,20vw,20rem)] leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </main>
  );
};
