/**
 * TestCard component
 * A simple card component that displays a title and description.
 * Used as a reference/demo component for testing and UI exploration.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-3 rounded bg-elevation-surface-raised p-6 shadow-sm">
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtlest">
        This is a short description paragraph.
      </p>
    </div>
  );
};
