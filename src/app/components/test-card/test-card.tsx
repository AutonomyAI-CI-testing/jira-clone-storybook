export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-2 text-sm text-font-subtle">
        This is a sample description paragraph for the test card component.
      </p>
    </div>
  );
};
