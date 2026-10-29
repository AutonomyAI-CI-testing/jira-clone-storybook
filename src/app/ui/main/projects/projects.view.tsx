import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        The page is one full-screen statement: a black canvas with a single
        word in green. The fixed layer sits above the app header, so "Fei" is
        the only thing visible on this route.
      */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
