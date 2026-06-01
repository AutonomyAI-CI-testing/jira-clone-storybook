export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h3 className="text-lg text-font">Test Card Title</h3>
      <p className="mt-2 text-font-subtle">
        This is a test card description. It demonstrates a simple card component
        with a title and description using semantic design tokens from the
        design system.
      </p>
    </div>
  );
};
