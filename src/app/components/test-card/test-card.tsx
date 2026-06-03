export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-primary-bold">Test Card Title</h2>
        <p className="font-primary-light text-sm text-font-subtle">
          This is a simple test card component with a title and description.
          It demonstrates the card styling pattern used throughout the
          application.
        </p>
      </div>
    </div>
  );
};
