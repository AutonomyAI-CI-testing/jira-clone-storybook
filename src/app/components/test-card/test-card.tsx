export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="text-2xl text-font">Test Card Title</h2>
        <p className="mt-2 font-primary-light text-font-subtle">
          This is a simple test card component displaying static content with a
          title heading and description paragraph.
        </p>
      </div>
    </div>
  );
};
