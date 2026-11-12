import { Outlet } from "react-router";

// The projects page is a full-screen splash: a single word on a black background
// and nothing else, so the shared header is hidden for this route (see main.layout.tsx).
// The Outlet keeps the nested routes (e.g. /projects/new) rendering on top of it.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
