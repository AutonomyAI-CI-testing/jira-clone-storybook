export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md bg-elevation-surface p-6 shadow-sm"
    >
      <h2 className="mb-2 font-primary-bold text-2xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle leading-6">
        This is a simple card component displaying a title heading and short
        description paragraph.
      </p>
    </div>
  );
};
