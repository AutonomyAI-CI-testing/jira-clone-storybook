export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <h2 className="mb-2 font-primary-bold text-2xl text-font">Test Card</h2>
      <p className="font-primary-light text-base text-font-subtle">
        This is a simple card component that displays a title heading and a
        description paragraph.
      </p>
    </div>
  );
};
