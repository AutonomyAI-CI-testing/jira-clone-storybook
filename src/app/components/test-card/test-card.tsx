export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border-input bg-elevation-surface p-6"
    >
      <h2 className="text-lg font-primary-bold text-font">Test Card</h2>
      <p className="mt-2 text-sm text-font-subtlest">
        This is a simple card component for testing purposes. It displays a
        title and a description in a clean, card-like layout.
      </p>
    </div>
  );
};
