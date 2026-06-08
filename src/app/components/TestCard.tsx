/**
 * TestCard component - a simple card layout component used for testing and
 * demonstration purposes. It includes styling for borders, backgrounds, and
 * text hierarchy with Tailwind CSS.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border bg-elevation-surface p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-1 text-sm text-font-subtle">
        This is a short description inside the test card.
      </p>
    </div>
  );
};
