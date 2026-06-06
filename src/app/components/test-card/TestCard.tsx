/**
 * A simple card component that displays a title and description.
 * Used for displaying structured content with consistent styling.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface-raised p-6 shadow-md"
    >
      <h2 className="font-primary-black text-xl text-font">Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A short description providing context for this card.
      </p>
    </div>
  );
};
