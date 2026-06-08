
import { cx } from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "border border-border p-4 rounded-md shadow-sm bg-elevation-surface",
      )}
    >
      <h3 className={cx("text-xl font-bold mb-2 text-font-main")}>Test Card Title</h3>
      <p className={cx("text-sm text-font-subtle")}>This is a test description for the TestCard component.</p>
    </div>
  );
};
