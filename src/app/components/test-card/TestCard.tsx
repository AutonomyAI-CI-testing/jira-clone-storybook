/**
 * TestCard component used for layout and styling verification.
 * Displays a simple card with a title and description.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-elevation-surface-raised text-font shadow-sm rounded p-4 w-fit">
      <h2 className="text-lg font-primary">Test Card Title</h2>
      <p className="mt-1 text-sm text-font-subtle">
        This is a test card description for layout and styling verification.
      </p>
    </div>
  );
};
