import { useOutlet } from "react-router";

/**
 * The projects page renders a single full-page surface: the wordmark "Fei"
 * centered on a black background. The nested create-project route keeps
 * rendering through the outlet.
 */
export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return outlet;
  }

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl text-[#22a06b]">Fei</h1>
    </main>
  );
};
