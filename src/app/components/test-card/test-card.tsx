import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "flex flex-col gap-2 rounded bg-elevation-surface-raised p-3 shadow-xs"
      )}
    >
      <h1 className="font-primary-bold text-2xl">Test Card</h1>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component displaying a title and description
        in a card layout with proper styling and visual hierarchy.
      </p>
    </div>
  );
};
