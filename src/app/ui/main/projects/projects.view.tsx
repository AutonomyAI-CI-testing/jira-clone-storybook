export const ProjectsView = (): JSX.Element => {
  // The splash paints its own black surface, so it reads the dark theme's tokens.
  return (
    <div className="dark fixed inset-0 z-50 flex items-center justify-center bg-black">
      <h1 className="font-primary-black text-5xl text-font-success">Fei</h1>
    </div>
  );
};
