import { Outlet } from "react-router";

/**
 * The projects page is a single full-screen statement: a black surface with the
 * name centred on it, and nothing else. The black and the green are deliberate
 * literals - the token set declares no black, and the green ramp value is used
 * directly because no semantic role means "green on black".
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]">
        <h1 className="font-primary-black text-[12rem] leading-none text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
