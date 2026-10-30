import { Outlet } from "react-router";

// The splash is deliberately theme-independent: the semantic colour aliases flip
// with the theme skin and would go too dark on a black surface, so the
// palette's value is used directly here.
export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="font-primary-black text-9xl leading-none text-[#22a06b]">
          Fei
        </h1>
      </div>
      <Outlet />
    </>
  );
};
