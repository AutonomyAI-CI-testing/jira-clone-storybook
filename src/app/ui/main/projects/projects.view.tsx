import { Outlet } from "react-router";

// One-off splash screen: a plain black page with a single word in green.
// The screen deliberately sits outside the theme system (it is black in every
// theme), so both colors are fixed values rather than theme-aware tokens:
// the design system declares no black surface, and the green is the palette
// green already behind the success border and accent icon tokens.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#000000]">
      <h1 className="font-primary-black text-8xl text-[color:var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
