import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      {/*
       * The app shell renders the header on every main route, so this page
       * covers the viewport to show nothing but the title.
       */}
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#000000]">
        <h1 className="font-primary-black text-[10rem] leading-none text-[#00ff00]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
