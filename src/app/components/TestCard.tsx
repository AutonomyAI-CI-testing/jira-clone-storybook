import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className={cx(
          "rounded bg-elevation-surface-raised p-4 shadow-sm text-font"
        )}
      >
        <h2 className="text-lg font-semibold text-font">Test Card</h2>
        <p className="mt-1 text-sm text-font-subtle">
          This is a short description of the test card.
        </p>
      </div>
    </div>
  );
};
