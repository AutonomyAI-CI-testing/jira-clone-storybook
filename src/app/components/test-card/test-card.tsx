/**
 * TestCard component - A simple card component for displaying a title and description.
 * Used for testing purposes with a fixed element ID for test selectors.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 text-font shadow-sm"
    >
      <h2 className="mb-3 font-primary-bold text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component displaying a title and description.
      </p>
    </div>
  );
};
