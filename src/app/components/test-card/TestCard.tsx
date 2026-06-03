export const TestCard = (): JSX.Element => {
  return (
    // Test element for QA and automation testing
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-3 shadow-xs"
    >
      <h2 className="text-font">Test Title</h2>
      <p className="mt-2 text-font-subtle">This is a test description</p>
    </div>
  );
};
