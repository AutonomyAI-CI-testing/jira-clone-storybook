import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "w-[400px] rounded bg-elevation-surface-raised p-4 shadow-sm"
      )}
    >
      <h2 className="text-lg font-primary-black text-font">Test Title</h2>
      <p className="mt-2 text-sm font-primary-light text-font-subtle">
        Test description paragraph
      </p>
    </div>
  );
};
