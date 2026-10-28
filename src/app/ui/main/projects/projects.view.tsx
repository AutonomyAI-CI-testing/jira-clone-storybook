import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-black">
        {/* --color-font-success resolves to Green800, which is too dark to read
            on a black page, so the palette's success green is used directly. */}
        <h1 className="font-primary-black text-5xl text-[color:var(--Green600)]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
