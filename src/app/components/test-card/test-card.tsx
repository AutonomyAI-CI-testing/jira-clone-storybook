export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="text-lg text-font">Test Card Title</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a test card component demonstrating a simple card layout with a
        title heading and description paragraph.
      </p>
    </div>
  );
};
