export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="max-w-[320px] rounded border border-border bg-elevation-surface-raised p-4">
        <h2 className="font-primary-bold text-font">Test Card</h2>
        <p className="mt-2 font-primary text-font-subtle">
          A placeholder card rendered to confirm a new component can be added
          and shown.
        </p>
        <p className="mt-4 text-2xs text-font-subtle">Smoke test</p>
      </div>
    </div>
  );
};
