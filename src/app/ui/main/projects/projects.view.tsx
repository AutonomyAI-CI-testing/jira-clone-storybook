import { Outlet, useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // `/projects/new` renders the create-project panel through this outlet.
  if (outlet) {
    return <Outlet />;
  }

  return (
    <main className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[18vw] leading-none text-[color:var(--Green500)]">
        Fei
      </h1>
    </main>
  );
};
