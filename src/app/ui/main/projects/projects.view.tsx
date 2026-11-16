import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  // The `new` child route still renders inside the main layout, so it keeps
  // the normal page frame instead of the full-screen splash.
  if (outlet) {
    return <div className="p-6">{outlet}</div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[18vw] leading-none text-[color:var(--Green500)]">
        Fei
      </h1>
    </div>
  );
};
