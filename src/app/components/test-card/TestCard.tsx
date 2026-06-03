export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-md"
    >
      <h2 className="text-lg font-primary-bold text-font">
        Card Title
      </h2>
      <p className="mt-3 text-sm font-primary-light text-font-subtle">
        This is a simple card component displaying a title and
        description text. It serves as a basic content presentation
        unit.
      </p>
    </div>
  );
};
