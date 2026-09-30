export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="mx-auto w-[320px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test card</h2>
      <p className="mt-1 font-primary-light text-xs text-font-subtle">
        Placeholder card rendered from TestCard.tsx. No design was attached to
        this task, so this is default content.
      </p>
    </div>
  );
};
