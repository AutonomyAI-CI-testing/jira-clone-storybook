import { Outlet } from "react-router";

/**
 * Standalone screen: the whole page is a black surface with a single green
 * "Fei" heading in the middle. Nothing else is rendered on it.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-[color:var(--color-elevation-surface-splash)]">
        <h1 className="font-primary-black text-7xl text-[color:var(--color-font-splash)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
