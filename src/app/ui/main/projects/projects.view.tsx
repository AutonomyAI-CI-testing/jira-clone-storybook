import { Outlet } from "react-router";

/**
 * The projects page is a single wordmark on a black surface: no list, no
 * controls, no header (the route opts out of it through its `handle`). The word
 * is sized against the viewport because stating the name at full size is the
 * page's whole job, and both colours are named from the raw palette rather than
 * the themeable roles, because this surface is deliberately the same in every
 * theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center bg-black">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
