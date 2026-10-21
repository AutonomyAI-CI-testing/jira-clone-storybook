import { Outlet } from "react-router";

/**
 * Full-page splash: a black canvas with the "Fei" wordmark centred on it.
 * The app header is not rendered on this route (see `main.layout.tsx`), so
 * the splash is the only thing on screen. Black and green are used as raw
 * values on purpose: the design tokens define no black surface nor a green
 * text colour, and this screen is meant to look identical in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
      <Outlet />
    </div>
  );
};
