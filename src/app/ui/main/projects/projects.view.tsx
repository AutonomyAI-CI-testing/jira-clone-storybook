import { Outlet } from "react-router";

/**
 * The projects page is a full-page takeover: a black ground with the product
 * name centered in large green type, and nothing else on the page.
 *
 * Both colors come from the raw palette rather than from the semantic
 * `--color-*` roles: the design system has no black surface, and green is
 * reserved for success/done semantics. The page reads the same in every theme.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[clamp(6rem,18vw,14rem)] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
