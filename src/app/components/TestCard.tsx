export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="max-w-[360px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a smoke-test card. If you can see it, the component pipeline is
        working end to end.
      </p>
    </div>
  );
};

export default TestCard;
