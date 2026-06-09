/**
 * TestCard component for demonstrating layout and styles in Storybook.
 * This is a simple placeholder component.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-2">Test Card</h2>
      <p className="text-font-subtle">This is a short description.</p>
    </div>
  );
};
