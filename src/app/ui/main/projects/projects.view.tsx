import { Outlet } from "react-router";

// The projects index is a full page splash: a single wordmark on a black
// background, with no app chrome around it.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[color:red]">Fei</h1>
      <Outlet />
    </div>
  );
};
