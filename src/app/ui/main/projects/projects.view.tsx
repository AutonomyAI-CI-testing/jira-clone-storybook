import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black">
      {/* No green text role exists in the semantic set, so the ramp token stands in. */}
      <h1
        className="font-primary-black leading-none text-[20vw]"
        style={{ color: "var(--Green600)" }}
      >
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
