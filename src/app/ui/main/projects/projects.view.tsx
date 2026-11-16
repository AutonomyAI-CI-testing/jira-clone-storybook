import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <div className="p-6">{outlet}</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[18vw] leading-none text-[color:var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};
