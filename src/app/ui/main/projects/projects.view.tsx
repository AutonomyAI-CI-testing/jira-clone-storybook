import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        Fixed black splash: it covers the whole viewport (header included) so the
        page shows nothing but the word. The colour is a literal because this
        surface is deliberately theme-independent, and `--Green600` is the
        palette's green rather than the theme-varying `font-success` role.
      */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[10rem] leading-none text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
