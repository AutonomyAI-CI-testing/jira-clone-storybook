/**
 * A simple display card used for testing and UI demonstrations.
 * Renders a title and a description with themed spacing and elevation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a test card component.
      </p>
    </div>
  );
};
