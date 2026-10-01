export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex items-center justify-center bg-elevation-surface p-8 font-primary text-font"
  >
    <section className="w-80 rounded border border-border bg-elevation-surface-raised p-6 shadow-sm">
      <span className="rounded bg-background-brand-bold px-2 py-1 font-primary-bold text-2xs text-font-inverse">
        In Progress
      </span>
      <h2 className="mt-3 font-primary-bold text-lg">
        Design the new onboarding flow
      </h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        JIRA-128 · Updated 2 hours ago
      </p>
      <p className="mt-4 font-primary-light text-sm text-font-subtle">
        Break sign-up into three short steps and drop the optional company
        fields.
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background-accent-blue-subtle font-primary-bold text-xs text-font-accent-blue">
          AD
        </span>
        <span className="font-primary-light text-sm text-font-subtle">
          Due Jan 24
        </span>
      </div>
    </section>
  </div>
);

export default TestCard;
