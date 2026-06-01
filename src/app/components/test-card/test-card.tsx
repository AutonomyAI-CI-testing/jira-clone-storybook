export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-font-subtle">
        This is a simple test card with a title heading and a short description
        paragraph. It demonstrates a reusable card template for displaying
        informational content.
      </p>
    </div>
  );
};
