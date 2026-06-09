import { cx } from "classix";

const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "bg-background-surface",
        "border border-border-subtle",
        "p-6 rounded-lg",
        "shadow-sm",
        "w-full max-w-sm",
      )}
    >
      <h2 className="text-font-bold text-xl font-primary-bold mb-2">
        Test Card
      </h2>
      <p className="text-font-subtle text-sm font-primary-light">
        This is a self-contained test card component.
      </p>
    </div>
  );
};

export { TestCard };
