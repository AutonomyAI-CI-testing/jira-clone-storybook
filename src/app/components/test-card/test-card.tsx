export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h3 className="mb-3 font-primary-bold text-lg text-font">
        Test Card Title
      </h3>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple card component that displays a title and description
        with hardcoded content.
      </p>
    </div>
  );
};
