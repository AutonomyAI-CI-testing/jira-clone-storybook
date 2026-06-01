export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-md rounded border border-border-disabled bg-elevation-surface-raised p-6 shadow-xs"
    >
      <h2 className="mb-2 font-primary-bold text-lg text-font">Test Card</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a test card component with a title and description.
      </p>
    </div>
  );
};
