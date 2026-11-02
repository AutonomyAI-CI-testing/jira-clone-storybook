import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        Fixed black splash: it covers the whole viewport (header included) so the
        page shows nothing but the word. The red is a literal because this
        surface is deliberately theme-independent, and `--Red600` is the
        palette's truest red rather than the theme-varying `font-danger` role.
      */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-[10rem] leading-none text-[var(--Red600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
