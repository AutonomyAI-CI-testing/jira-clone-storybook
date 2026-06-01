export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-2xl text-font">Test Card Title</h2>
      <p className="mt-3 font-primary text-sm text-font-subtle">
        This is a simple description paragraph below the title.
      </p>
    </div>
  );
};
