/**
 * Deliberate one-off: this page is a single centred word on a black ground,
 * with nothing else on it. It is intentionally theme-independent, so it does
 * not use the semantic colour tokens.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-[#22a06b]">Fei</h1>
    </div>
  );
};
