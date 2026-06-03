import cx from "classix";

/**
 * TestCard component displays a simple elevated card with a title and description.
 * Used for showcasing basic card layout with elevation styling and hover effects.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-full rounded bg-elevation-surface-raised p-4 shadow-xs",
        "duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered"
      )}
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
