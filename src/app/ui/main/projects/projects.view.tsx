/**
 * The projects page is a single full-page statement: a black screen with one
 * centred word and nothing else. It renders as a fixed layer so the shared app
 * header does not sit behind it — no other part of the page is shown.
 */
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-[10rem] leading-none text-icon-accent-green">
        Fei
      </h1>
    </div>
  );
};
