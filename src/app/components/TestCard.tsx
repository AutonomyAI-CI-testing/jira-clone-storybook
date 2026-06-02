import cx from "classix";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      "flex flex-col rounded bg-elevation-surface-raised p-4 shadow-xs",
      "gap-2 text-font"
    )}
  >
    <h2 className="text-lg font-primary-bold">Test Card Title</h2>
    <p className="text-sm">
      This is a short description paragraph for the test card component.
    </p>
  </div>
);
