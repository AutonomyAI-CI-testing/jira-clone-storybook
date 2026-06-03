import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "rounded bg-elevation-surface-raised p-6 text-font shadow-sm"
      )}
    >
      <h2 className="mb-2 font-primary text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component displaying a title and description
        with consistent styling.
      </p>
    </div>
  );
};
