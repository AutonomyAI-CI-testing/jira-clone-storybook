export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-elevation-surface-raised rounded-md border border-border p-6 shadow-md"
    >
      <h2 className="font-primary-bold text-2xl text-font">Test Card</h2>
      <p className="mt-2 font-primary-light text-font-subtle">
        This is a test card component
      </p>
    </div>
  );
};
