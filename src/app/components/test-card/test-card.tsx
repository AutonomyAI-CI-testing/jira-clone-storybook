/**
 * A self-contained card component used for display or testing.
 * Renders a title and description within a stylized container.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      // uses elevation surface tokens for visual distinction and shadow-sm for depth
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-black text-lg text-font">
        Card Title
      </h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
