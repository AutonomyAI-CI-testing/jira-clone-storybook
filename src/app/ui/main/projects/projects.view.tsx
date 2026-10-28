import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        Full-bleed black stage. No semantic token describes a black surface, so
        the background is Tailwind's `black`, and the green is the repo's
        Green600 ramp step — the semantic `font-success` token resolves to a
        dark Green800 in the light theme and is unreadable on black.
      */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-5xl text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
