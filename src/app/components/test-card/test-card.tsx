/**
 * A simple card component used for testing layout and styling.
 * Uses elevation-surface-raised for visual depth and subtle font colors for hierarchy.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="text-lg text-font">Test Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
