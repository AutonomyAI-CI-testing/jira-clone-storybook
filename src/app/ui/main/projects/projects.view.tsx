import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <div className="p-6">{outlet}</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
