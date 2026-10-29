import { Outlet } from "react-router";

// Cover screen: the projects page renders only the "Fei" wordmark on black.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-[var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
