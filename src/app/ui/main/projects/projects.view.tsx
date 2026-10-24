import { Outlet } from "react-router";

/**
 * Full-page splash: a black surface with the wordmark centred in green.
 * It intentionally sits outside the theme tokens (no theme surface is pure
 * black, and the wordmark colour must not shift between themes), so the colour
 * is pinned to the palette value rather than to a semantic role.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
