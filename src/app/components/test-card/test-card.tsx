import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "rounded bg-elevation-surface-raised p-4 shadow-sm"
      )}
    >
      <h2 className="text-lg text-font">Test Card Title</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        Test card description paragraph
      </p>
    </div>
  );
};
