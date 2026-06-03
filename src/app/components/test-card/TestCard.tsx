/**
 * TestCard component - A simple card display component.
 *
 * Renders a card with a title heading and description text.
 * Uses elevation and shadow styling to provide visual hierarchy.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded bg-elevation-surface-raised p-3 shadow-xs">
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-2 font-primary text-font-subtle">
        This is a simple card component that displays a title heading and a
        short description paragraph.
      </p>
    </div>
  );
};
