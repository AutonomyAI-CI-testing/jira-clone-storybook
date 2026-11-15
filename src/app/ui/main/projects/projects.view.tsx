import { Outlet } from "react-router";

// The projects page is a full-bleed screen: the app name centered on a black
// background and nothing else. The outlet stays so the child routes (the
// create-project panel) keep rendering over it.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
      <Outlet />
    </div>
  );
};
