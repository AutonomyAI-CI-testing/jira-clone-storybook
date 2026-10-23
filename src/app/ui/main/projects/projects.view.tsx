import { Outlet, useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // `/projects/new` renders the create-project panel through this outlet.
  if (outlet) {
    return <Outlet />;
  }

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-[18vw] leading-none text-icon-accent-green">
        Fei
      </h1>
    </main>
  );
};
