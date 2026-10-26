export const ProjectsView = (): JSX.Element => {
  // Fixed and full-bleed so the page shows nothing but the wordmark: the
  // layer covers the app header, which would otherwise be visible above it.
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-icon-accent-green">Fei</h1>
    </div>
  );
};
