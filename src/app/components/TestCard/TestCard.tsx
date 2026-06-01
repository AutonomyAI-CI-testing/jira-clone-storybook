export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-black text-2xl text-font">Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a test card with a title and description paragraph.
      </p>
    </div>
  );
};
