import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "w-full max-w-[400px] rounded bg-elevation-surface-raised p-6 shadow-sm"
      )}
    >
      <h2 className="font-primary-bold text-2xl text-font">Test Card</h2>
      <p className="mt-3 font-primary-light text-sm leading-6 text-font-subtle">
        This is a test card component with a title and description. It uses the
        existing design patterns from the Jira Clone project.
      </p>
    </div>
  );
};
