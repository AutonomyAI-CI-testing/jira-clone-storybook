export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-80 flex-col gap-3 rounded bg-elevation-surface-raised p-4 shadow-sm"
  >
    <h2 className="font-primary-bold text-base text-font">Test card</h2>
    <p className="font-primary-light text-sm leading-6 text-font-subtle">
      Rendered from the Jira-clone design tokens as a build and preview smoke
      test.
    </p>
    <div className="flex items-center gap-2 border-t border-border pt-3 text-xs">
      <span className="rounded bg-background-brand-subtlest px-2 py-0.5 font-primary text-font-brand">
        Smoke test
      </span>
      <span className="font-primary-light text-font-subtlest">
        Updated just now
      </span>
    </div>
  </div>
);
