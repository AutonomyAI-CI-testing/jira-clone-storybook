export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised shadow-sm outline outline-1 outline-border p-4 w-[320px] flex flex-col gap-2"
    >
      <h2 className="text-lg font-primary-bold text-font">Card Title</h2>
      <p className="font-primary-light text-sm text-font-subtle">
        Short description text for this card.
      </p>
    </div>
  );
};