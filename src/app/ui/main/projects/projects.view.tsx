import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <>{outlet}</>;
  }

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[color:var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};
