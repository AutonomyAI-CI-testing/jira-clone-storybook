import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const childRoute = useOutlet();

  // The "new project" route renders its own full-screen dialog, so it takes
  // over the page instead of the projects surface.
  if (childRoute) {
    return <>{childRoute}</>;
  }

  return (
    <div className="flex min-h-screen w-full flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black leading-none text-[clamp(4rem,20vw,14rem)] text-[#00ff00]">
        Fei
      </h1>
    </div>
  );
};
