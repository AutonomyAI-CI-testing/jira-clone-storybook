export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md bg-elevation-surface-raised p-6">
      <h2 className="font-primary-bold text-xl text-font-brand">
        Test Card Component
      </h2>
      <p className="mt-3 font-primary text-sm text-font-subtle">
        This is a simple card component that displays a title heading and a
        descriptive paragraph. It demonstrates a clean, consistent card layout
        following the established component patterns.
      </p>
    </div>
  );
};
