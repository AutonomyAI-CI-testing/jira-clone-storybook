export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center bg-elevation-surface-sunken p-6 font-primary"
    >
      <div className="w-full max-w-sm rounded border border-border bg-elevation-surface-raised p-4 shadow-sm">
        <span className="inline-block rounded bg-background-brand-subtlest px-2 py-0.5 text-2xs text-font-brand">
          Smoke test
        </span>
        <h2 className="mt-3 font-primary-bold text-base text-font">Test Card</h2>
        <p className="mt-1 font-primary-light text-sm text-font-subtle">
          A self-contained card rendered to confirm components appear in the
          preview.
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
          <span className="h-2 w-2 rounded-full bg-background-brand-bold" />
          <span className="text-2xs text-font-subtle">
            Rendered from mock content
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
