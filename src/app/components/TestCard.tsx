/**
 * A self-contained card component displaying a title and description.
 * Uses the elevation surface token to stand out from the page background.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm text-font"
    >
      <h2 className="text-lg font-primary-bold">Test Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a hardcoded description for the test card component.
      </p>
    </div>
  );
};
