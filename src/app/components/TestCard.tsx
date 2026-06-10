/**
 * A simple card component used for testing layout and theme integrations.
 * Uses elevation-surface-raised background and border-bold to remain visible
 * across different theme backgrounds.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md border border-border-bold bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="mb-2 font-primary-black text-xl text-font">Test Card</h2>
      <p className="font-primary text-sm text-font-subtle">
        This is a test card component.
      </p>
    </div>
  );
};
