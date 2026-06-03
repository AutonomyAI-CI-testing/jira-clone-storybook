/**
 * TestCard - A simple card component for testing purposes.
 * Displays a title and description with consistent styling from the design system.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      // ID provided for test element lookup in automated tests
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description paragraph for the test card component.
      </p>
    </div>
  );
};
