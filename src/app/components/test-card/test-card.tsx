/**
 * A simple card component for testing purposes.
 * Displays a title heading and a description paragraph with styled borders and shadow.
 * The testElem ID is used for test selectors and element lookup in test suites.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-lg border border-border-neutral bg-background-elevation-surface p-6 shadow-md"
    >
      <h3 className="mb-3 font-primary-bold text-lg text-font-brand">
        Test Card Title
      </h3>
      <p className="font-primary-light text-sm leading-6 text-font-subtle">
        This is a simple card component for testing purposes. It displays a
        title heading and a description paragraph.
      </p>
    </div>
  );
};
