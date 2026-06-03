export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="mb-2 font-primary-black text-lg text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component that displays a title and
        description text with clean styling.
      </p>
    </div>
  );
};
