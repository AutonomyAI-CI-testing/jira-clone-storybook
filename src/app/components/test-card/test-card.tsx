export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="text-lg">Test Card Title</h2>
        <p className="text-sm text-font-subtle">
          This is a simple test card component displaying a title and
          description for testing the design system.
        </p>
      </div>
    </div>
  );
};
