import { Outlet } from "react-router";

/**
 * Deliberate one-off screen: a black canvas with the word "Fei" on it.
 *
 * It is intentionally off the design system. The palette has no black
 * surface token and the page has to stay black in every theme, so the
 * background is a literal and the red comes from the raw palette
 * (`--Red600`) instead of a semantic token the themes would repaint.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[var(--Red600)]">Fei</h1>
      <Outlet />
    </div>
  );
};
