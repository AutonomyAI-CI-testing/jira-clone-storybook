import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // Nested routes, such as /projects/new, render their own panel over the app.
  if (outlet) {
    return <>{outlet}</>;
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[var(--Green600)]">Fei</h1>
    </div>
  );
};
