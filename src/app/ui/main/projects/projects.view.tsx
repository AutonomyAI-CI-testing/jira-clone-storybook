import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-black">
        {/* CircularStdBlack's ink sits above its line-box centre; nudge it back */}
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
