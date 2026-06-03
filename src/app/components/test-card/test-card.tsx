export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full rounded bg-elevation-surface-raised p-4 shadow-sm text-font"
    >
      <h2 className="text-lg">Test Card</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a test card component with a short description.
      </p>
    </div>
  );
};
