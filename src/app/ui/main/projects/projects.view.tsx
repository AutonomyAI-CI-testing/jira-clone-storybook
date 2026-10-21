// The /projects screen is a plain black page that shows a single word, "Fei",
// centered in green. It sits above the app shell (fixed, full viewport) so the
// header does not show through.
export const ProjectsView = (): JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]">
      <h1 className="font-primary-black text-8xl text-[var(--Green400)]">Fei</h1>
    </div>
  );
};
