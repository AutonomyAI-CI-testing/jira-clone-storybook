import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className={cx(
          "flex w-full cursor-default flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out"
        )}
      >
        <h2 className="text-lg text-font">Test Card Title</h2>
        <p className="font-primary-light text-sm text-font-subtle">
          This is a test card with a title heading and a short description
          paragraph.
        </p>
      </div>
    </div>
  );
};
