export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple card component displaying a title heading and a short
        description paragraph.
      </p>
    </div>
  );
};
