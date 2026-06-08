/**
 * TestCard component - A simple card component for testing and demonstration purposes.
 * Displays a title and description with consistent styling and spacing.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg font-primary-bold text-font">Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};