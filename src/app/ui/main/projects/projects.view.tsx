import { Outlet, useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // Child routes (the create project panel) render their own layout.
  if (outlet) return <Outlet />;

  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
    </div>
  );
};
