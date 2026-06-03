export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-sm"
    >
      <h2 className="mb-2 font-primary-bold text-lg text-font">Test Card</h2>
      <p className="font-primary text-sm text-font-subtle">
        This is a simple test card component for verifying rendering and styling
        within the project.
      </p>
    </div>
  );
};
