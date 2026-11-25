import { useOutlet } from "react-router";

/**
 * The projects list is a full-bleed screen: it paints its own background and
 * shows nothing but the brand wordmark. Nested routes (the create project
 * dialog) keep rendering on the app surface.
 */
export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) return <>{outlet}</>;

  return (
    <div className="flex flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[#00ff00]">Fei</h1>
    </div>
  );
};
