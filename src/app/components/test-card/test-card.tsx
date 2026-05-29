export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="mb-3 text-lg font-primary-bold text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple, self-contained card component for displaying test
        content with a title and description.
      </p>
    </div>
  );
};
