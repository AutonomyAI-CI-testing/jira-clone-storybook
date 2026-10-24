import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <main className="flex h-full items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
          Fei
        </h1>
      </main>
      <Outlet />
    </>
  );
};
