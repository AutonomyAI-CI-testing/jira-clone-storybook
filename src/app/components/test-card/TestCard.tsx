export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex flex-col gap-2 rounded-[3px] bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-bold text-lg text-font">Card Title</h2>
        <p className="font-primary text-sm text-font-subtle">
          This is a short description providing context about the card content.
        </p>
      </div>
    </div>
  );
};
