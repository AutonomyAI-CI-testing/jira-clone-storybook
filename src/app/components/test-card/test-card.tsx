export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-sm"
    >
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="text-sm text-font-subtle">
        This is a simple card component for testing the project's component
        system and styling.
      </p>
    </div>
  );
};
