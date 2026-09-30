export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-80 rounded border border-border bg-elevation-surface p-4 font-primary text-font shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-primary-bold text-font-subtle">
          JIRA-101
        </span>
        <span className="rounded bg-background-danger px-2 py-0.5 text-2xs font-primary-bold text-font-danger">
          High
        </span>
      </div>

      <h2 className="mt-3 text-2xl font-primary-bold">Fix login redirect loop</h2>

      <p className="mt-2 text-sm font-primary-light text-font-subtle">
        Signing in with an expired session bounces between the login screen and
        the board. Refresh the session token before redirecting.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded bg-background-accent-blue-subtlest px-2 py-0.5 text-2xs font-primary-bold text-font-accent-blue">
          bug
        </span>
        <span className="rounded bg-background-accent-green-subtlest px-2 py-0.5 text-2xs font-primary-bold text-font-accent-green">
          auth
        </span>
        <span className="rounded bg-background-accent-grey-subtlest px-2 py-0.5 text-2xs font-primary-bold text-font-accent-grey">
          frontend
        </span>
      </div>

      <div className="mt-4 border-t border-border" />

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background-neutral-bold text-2xs font-primary-bold text-font-inverse">
            DS
          </span>
          <span className="text-xs font-primary-bold text-font-subtle">
            Daniel Serrano
          </span>
        </div>
        <span className="text-xs font-primary-light text-font-subtlest">
          Updated 2 days ago
        </span>
      </div>
    </div>
  );
};
