import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div>
      <div
        className={cx(
          "w-[300px] rounded bg-elevation-surface-raised p-6 shadow-sm",
          "border border-border-default"
        )}
      >
        <h2 className="font-primary-black text-2xl text-font">Test Card</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          This is a simple card component for testing and demonstration
          purposes. It displays a title and description in a clean, readable
          layout.
        </p>
      </div>
    </div>
  );
};
