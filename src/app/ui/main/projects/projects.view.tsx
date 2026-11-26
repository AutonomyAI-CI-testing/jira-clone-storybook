import { useOutlet } from "react-router";

export const ProjectsView = (): JSX.Element => {
  const childRoute = useOutlet();

  return (
    <div className="p-6">
      {childRoute ?? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <h1 className="font-primary-black text-8xl text-[var(--Green500)]">
            Fei
          </h1>
        </div>
      )}
    </div>
  );
};
