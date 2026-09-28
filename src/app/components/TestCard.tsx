export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[320px] rounded-lg border border-border bg-elevation-surface-raised p-6 font-primary text-font shadow-sm"
  >
    <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
    <p className="mt-2 font-primary-light text-sm text-font-subtle">
      A short smoke-test description.
    </p>
    <button
      type="button"
      className="mt-4 rounded-md bg-background-brand-bold px-4 py-2 font-primary text-sm text-font-inverse hover:bg-background-brand-bold-hovered"
    >
      Action
    </button>
  </div>
);

export default TestCard;
