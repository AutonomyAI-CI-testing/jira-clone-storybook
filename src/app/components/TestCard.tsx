/**
 * TestCard component
 * A simple card component that displays a title and description.
 * Used as a basic example of a styled container component.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description of the card.
      </p>
    </div>
  );
};
