import { Outlet } from "react-router";

// Fixed black canvas with a single green wordmark. Both values are deliberately
// literal: the surface is theme-independent by request, and the semantic
// success token (--color-font-success) is theme-scoped, so it would not hold
// its green against a black background in every theme.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#22a06b]">Fei</h1>
      <Outlet />
    </div>
  );
};
