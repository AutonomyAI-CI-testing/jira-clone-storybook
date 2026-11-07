import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // /projects/new renders its own panel on top of this route
  if (outlet) {
    return outlet;
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[var(--Green600)]">
        Fei
      </h1>
    </div>
  );
};
