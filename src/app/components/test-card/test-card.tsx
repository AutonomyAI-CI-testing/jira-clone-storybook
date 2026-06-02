export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg font-primary text-font">Sample Card Title</h2>
      <p className="mt-2 text-base font-primary-light text-font-subtle">
        This is a sample description paragraph for the card component.
      </p>
    </div>
  );
};
