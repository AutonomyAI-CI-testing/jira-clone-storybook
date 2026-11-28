import { Outlet } from "react-router";

/**
 * The projects page is a full-page takeover: a black ground with the product
 * name centered in large red type, and nothing else on the page.
 *
 * The two colors sit deliberately outside the themeable palette — the design
 * system has no black surface and red is reserved for danger/priority — so they
 * are written as literals rather than as `--color-*` theme variables, and the
 * page reads the same in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(6rem,18vw,14rem)] leading-none text-[color:var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
