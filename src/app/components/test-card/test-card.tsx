export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg font-primary-black">Test Card Title</h2>
      <p className="mt-2 text-sm font-primary-light text-font-subtle">
        This is a simple card component that displays a title heading and a
        description paragraph below it.
      </p>
    </div>
  );
};
