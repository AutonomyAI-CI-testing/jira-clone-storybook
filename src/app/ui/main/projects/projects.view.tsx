export const ProjectsView = (): JSX.Element => {
  // Full-page takeover: fixed positioning keeps the app header out of the way,
  // so the projects route shows nothing but the wordmark.
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
    </div>
  );
};
