export const ProjectsView = (): JSX.Element => {
  // Full-bleed brand screen: it covers the app shell on purpose, so the page
  // shows the wordmark and nothing else.
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl leading-none text-font-success">
        Fei
      </h1>
    </div>
  );
};
