import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Deliberate literal: plain green on black has no matching design token
          (the repo's greens are muted --Green/--Lime tones) and the intent is a
          fixed colour rather than a themed one. */}
      <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
      <Outlet />
    </div>
  );
};
