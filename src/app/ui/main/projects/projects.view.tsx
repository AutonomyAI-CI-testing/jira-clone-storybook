import { Outlet, useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  // Nested project routes (the create form) keep rendering as before. The
  // projects page itself is a full-bleed splash, so it covers the app shell.
  const nestedRoute = useOutlet();

  if (nestedRoute) return <Outlet />;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black">
      <h1 className="font-primary-black text-9xl text-font-danger">Fei</h1>
    </div>
  );
};
