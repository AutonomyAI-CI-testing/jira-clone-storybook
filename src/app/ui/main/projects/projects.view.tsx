import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
        Literal black + a raw palette green (--Green600) instead of semantic
        roles: this page has to look identical under every theme, and the
        roles are re-declared per theme class.
      */}
      <div className="flex h-full items-center justify-center bg-black">
        <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
