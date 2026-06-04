export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="rounded bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-black text-font">Test Card Title</h2>
        <p className="mt-2 font-primary-light text-font-subtle">
          This is a test card description with some example text.
        </p>
      </div>
    </div>
  );
};
