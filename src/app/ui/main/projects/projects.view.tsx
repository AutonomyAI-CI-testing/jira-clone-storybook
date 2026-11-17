import { useOutlet } from "react-router";

/**
 * The projects page is a single full-screen statement: a black page with the
 * word "Fei" centred in red. Child routes (e.g. `/projects/new`) render on
 * their own instead of on top of it.
 */
export const ProjectsView = (): JSX.Element => {
  const outlet = useOutlet();

  if (outlet) {
    return <>{outlet}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-9xl leading-none text-[var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
