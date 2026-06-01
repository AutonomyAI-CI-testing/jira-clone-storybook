export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="text-lg font-primary text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card component with a short description.
      </p>
    </div>
  );
};
