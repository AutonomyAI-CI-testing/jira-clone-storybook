import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ width: "360px" }}
      className={cx(
        "rounded bg-elevation-surface-raised p-5",
        "border border-border shadow-sm"
      )}
    >
      <h2 className="font-primary-bold text-lg text-font">
        Test Card Title
      </h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component. It
        demonstrates the project's card styling conventions.
      </p>
    </div>
  );
};