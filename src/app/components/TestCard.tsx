export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[400px] rounded bg-elevation-surface-raised p-4 text-font shadow-sm"
    >
      <h2 className="font-primary-black text-lg">Test card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        A self-contained card component, rendered on its own.
      </p>
      <span className="mt-3 inline-block rounded bg-background-accent-grey-subtler px-1 py-0.5 font-primary-light text-2xs uppercase text-font-accent-grey">
        TODO
      </span>
    </div>
  );
};
