/**
 * A basic card component used for testing and placeholder content.
 * Follows the elevation surface style for consistent UI appearance.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="text-lg text-font">Card Title</h2>
      <p className="mt-2 text-sm text-font-subtle">
        A short description of this card's content.
      </p>
    </div>
  );
};
