export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-6 shadow-sm">
        <h2 className="mb-3 font-primary-black text-2xl text-font">
          Test Card
        </h2>
        <p className="font-primary-light text-font-subtle">
          This is a simple card component for testing and demonstration
          purposes.
        </p>
      </div>
    </div>
  );
};
