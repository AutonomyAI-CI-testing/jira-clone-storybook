/**
 * A simple card component that displays static content.
 * Used for testing and documentation purposes.
 * The `testElem` ID is used for test targeting.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="w-full rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="mb-3 font-primary text-lg text-font">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple card component displaying static content with a title
        heading and a short description paragraph.
      </p>
    </div>
  </div>
);
