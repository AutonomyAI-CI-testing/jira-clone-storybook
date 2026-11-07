import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
