export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="text-lg font-primary text-font">Test Card</h2>
        <p className="pt-2 text-sm font-primary-light text-font-subtle">
          This is a simple card component that displays a title and description text.
        </p>
      </div>
    </div>
  );
};
