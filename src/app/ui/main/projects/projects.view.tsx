import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <>{outlet}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-font-success">Fei</h1>
    </div>
  );
};
