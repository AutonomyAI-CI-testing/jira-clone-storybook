/**
 * TestCard Component
 *
 * A simple card component for testing and demonstration purposes.
 * Displays a title and descriptive text with consistent styling.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-4">
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a test card component with placeholder content.
      </p>
    </div>
  );
};
