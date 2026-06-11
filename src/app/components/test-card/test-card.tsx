/**
 * A simple card component used for testing layouts and theme elevations.
 * Uses elevation-surface-raised to demonstrate theme-aware background colors.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
