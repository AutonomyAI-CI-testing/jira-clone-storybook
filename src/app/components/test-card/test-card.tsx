export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="text-lg font-primary-bold text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card component
      </p>
    </div>
  );
};
