import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // The create project panel is a nested route: it renders on its own.
  if (outlet) return outlet;

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-font-danger">Fei</h1>
    </div>
  );
};
