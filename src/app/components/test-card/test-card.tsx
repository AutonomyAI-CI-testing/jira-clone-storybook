export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded bg-elevation-surface-raised p-3 shadow-sm"
    >
      <h2 className="text-lg font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-1 text-sm text-font-subtle">
        This is a simple card component displaying a title and description in a
        contained card format.
      </p>
    </div>
  );
};
