import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      {/* Off-palette splash: the theme has no black and no display-colour
          semantic token, so black is used as-is and the word takes the
          palette's own Green600. */}
      <h1 className="font-primary-black text-9xl text-[var(--Green600)]">
        Fei
      </h1>
      <Outlet />
    </div>
  );
};
