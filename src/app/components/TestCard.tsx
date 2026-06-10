/**
 * A simple card component used for testing layout and elevation.
 * Uses elevation-surface-raised to pop against the background in a standard card layout.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md border border-border p-4 shadow-sm bg-elevation-surface-raised">
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
