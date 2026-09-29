export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6">
      <div className="w-80 rounded-md bg-elevation-surface-raised p-4 shadow-sm outline outline-1 outline-border">
        <h2 className="font-primary-bold text-lg text-font">
          Test card heading
        </h2>
        <p className="mt-2 font-primary text-sm text-font-subtle">
          A short line of body text to make the card read as a card.
        </p>
        <p className="mt-1 font-primary text-sm text-font-subtle">
          A second line of supporting copy.
        </p>
      </div>
    </div>
  );
};

export default TestCard;
