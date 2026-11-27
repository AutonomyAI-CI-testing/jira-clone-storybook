import { Outlet } from "react-router";

/**
 * Full-screen black page showing only the "Fei" wordmark.
 *
 * The nested outlet is kept so the create-project route (`/projects/new`)
 * still renders its panel inside this page.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex w-full flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[#ff0000]">Fei</h1>
      <Outlet />
    </div>
  );
};
