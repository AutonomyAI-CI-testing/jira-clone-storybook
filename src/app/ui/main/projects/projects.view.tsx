import { Outlet } from "react-router";

/**
 * The projects list is replaced by a single full-bleed title screen: black
 * background, one large green word, nothing else.
 *
 * The two colours are deliberately outside the semantic token layer — the
 * theme has no role for a pure black surface or for a title that keeps the
 * same green in every theme, so the green is taken from the base palette
 * (`--Green600`, the system's green accent) and stays fixed while the rest of
 * the app re-themes around it.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
