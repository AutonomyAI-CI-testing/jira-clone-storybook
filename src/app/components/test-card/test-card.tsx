/**
 * A basic card component used for testing layout and styling integration.
 * It follows the raised surface elevation pattern with standard padding.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md border border-border bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="font-primary-black text-lg text-font">
        Test Card Title
      </h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
