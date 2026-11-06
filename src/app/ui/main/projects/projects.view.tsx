import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="h-full bg-black">
      <div className="grid h-full place-items-center">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </div>
  );
};
