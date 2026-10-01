export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-2 rounded-md border border-border bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="font-primary-bold text-font">Test card</h2>
      <p className="font-primary text-sm text-font-subtle">
        This is a self-contained placeholder card. It takes no props, holds no
        state and renders static content only.
      </p>
      <div className="flex items-center gap-2 border-t border-border pt-2 font-primary-light text-xs text-font-subtlest">
        <span>TestCard</span>
        <span aria-hidden="true">•</span>
        <span>Static content</span>
      </div>
    </div>
  );
};
