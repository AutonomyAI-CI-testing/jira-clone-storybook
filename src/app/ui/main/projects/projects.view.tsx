import { Outlet } from "react-router";

// Deliberately off-system screen: a black canvas with "Fei" centred in red.
// The palette declares no black and no red role that stays red in every theme, and this
// screen must look identical in all of them, so both colours are written as literals here
// on purpose instead of as semantic tokens.
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#000000]">
        <h1 className="font-primary-black text-9xl leading-none text-[var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
