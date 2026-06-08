/**
 * TestCard component — a simple presentational card for displaying test content.
 * Used primarily for testing and development purposes.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      // testElem id used for testing and element identification
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface p-5 shadow-xs"
    >
      <h2 className="mb-2 font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        This is a short description for the test card.
      </p>
    </div>
  );
};
