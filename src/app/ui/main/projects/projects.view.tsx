import { Outlet } from "react-router";

/**
 * The projects index is a bare splash screen: a black page with a single word
 * centred in it. It deliberately steps outside the themed surfaces, so the
 * colour comes from an icon role — the `font-*` roles resolve to a dark
 * green/maroon under the light theme, which is unreadable on a fixed black
 * surface, while `icon-accent-green` stays a true green in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-icon-accent-green">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
