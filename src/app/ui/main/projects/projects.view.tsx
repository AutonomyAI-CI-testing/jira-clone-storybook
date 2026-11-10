import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <div className="p-6">{outlet}</div>;
  }

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[clamp(5rem,16vw,14rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
