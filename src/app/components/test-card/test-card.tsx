export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border bg-elevation-surface p-6 shadow-sm"
    >
      <h2 className="mb-3 text-lg font-semibold text-font">
        Test Card Title
      </h2>
      <p className="text-font-subtle">
        This is a simple test card component displaying a static heading and
        description paragraph following the Jira Clone design patterns.
      </p>
    </div>
  );
};
