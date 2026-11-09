import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-black">
        {/* The line box centres the box, not the ink: nudge so "Fei" sits
            optically centred in the viewport. */}
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
