export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="inline-block w-full max-w-[320px] rounded-[3px] bg-elevation-surface-raised p-4 shadow-xs">
        <h2 className="font-primary-bold text-font text-xl">
          Test Card Title
        </h2>
        <p className="font-primary-light text-font-subtle mt-1 text-sm">
          This is a self-contained description for the TestCard component.
        </p>
      </div>
    </div>
  );
};
