import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "bg-elevation-surface-raised rounded shadow-sm px-3 pb-4 pt-2"
      )}
    >
      <h2 className="text-lg">Test Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a simple test card component with a title heading and
        description paragraph. It renders as a visually distinct card element.
      </p>
    </div>
  );
};
