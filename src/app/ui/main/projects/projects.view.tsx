import { Outlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  return (
    <>
      <div className="grid flex-1 place-items-center bg-black">
        <h1 className="font-primary-black text-[6rem] text-[#ff0000]">Fei</h1>
      </div>
      <Outlet />
    </>
  );
};
