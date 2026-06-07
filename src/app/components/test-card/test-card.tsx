/**
 * TestCard: A simple card component displaying a title and description.
 * Used for testing component composition, styling, and Storybook integration.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm"
    >
      <h2 className="font-primary-bold text-xl text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
