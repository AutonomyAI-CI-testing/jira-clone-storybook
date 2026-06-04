export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
        <h2 className="text-lg font-medium text-font">Test Card Title</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          This is a description paragraph for the test card component.
        </p>
      </div>
    </div>
  );
};
