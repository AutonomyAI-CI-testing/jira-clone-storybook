export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-border-input bg-elevation-surface p-6"
    >
      <h2 className="mb-3 font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="text-sm text-font-subtlest">
        This is a simple demonstration card component displaying a title and
        description.
      </p>
    </div>
  );
};
