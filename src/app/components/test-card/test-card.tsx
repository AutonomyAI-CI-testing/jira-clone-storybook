/**
 * A simple card component used for testing and development purposes.
 * Displays a title and description text with a subtle elevation effect.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-1 rounded bg-elevation-surface-raised p-4 shadow-xs"
    >
      <h2 className="text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component for testing purposes.
      </p>
    </div>
  );
};
