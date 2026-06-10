/**
 * A simple card component used for testing layout and theme consistency.
 * Renders a titled card with a short description using the application's design tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="rounded border border-border bg-elevation-surface-raised p-5 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description providing context for the test card component.
      </p>
    </div>
  );
};
