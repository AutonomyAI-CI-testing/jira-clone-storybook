export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-72 flex flex-col gap-2 rounded bg-elevation-surface-raised p-5 shadow-sm border border-border">
        <h2 className="font-primary-black text-xl text-font">
          My Test Card
        </h2>
        <p className="font-primary-light text-sm text-font-subtle">
          This is a short description providing context about the card content.
        </p>
      </div>
    </div>
  );
};
