import { Outlet, useOutlet } from "react-router";

/**
 * Full-bleed splash for the projects route: a black page with a single word.
 * The route also hosts the nested create-project dialog, so when a child route
 * matches, hand the page over to it instead of painting over it.
 */
export const ProjectsSplashView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <Outlet />;
  }

  // CircularStdBlack's line box centres higher than its ink, so nudge the word
  // down by 0.06em to put the glyphs - not the box - at the centre of the page.
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};
