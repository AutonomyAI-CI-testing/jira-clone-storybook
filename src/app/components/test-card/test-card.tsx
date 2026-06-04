export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="text-lg font-primary text-font">Test Card Title</h2>
      <p className="mt-2 text-sm font-primary-light text-font-subtle">
        This is a simple test card component with a title heading and a short
        description paragraph.
      </p>
    </div>
  );
};
