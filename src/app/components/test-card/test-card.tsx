export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-4 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
