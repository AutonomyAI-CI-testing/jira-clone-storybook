export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded border border-border bg-elevation-surface-raised p-4 font-primary text-font shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-primary-bold text-font">Test card title</h3>
        <span className="font-primary-light text-2xs text-font-subtle">
          TEST-1
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className="rounded-full bg-background-accent-blue-subtle px-2 py-0.5 text-2xs font-primary-bold text-font-accent-blue">
          In progress
        </span>
        <span className="rounded-full bg-background-accent-grey-subtle px-2 py-0.5 text-2xs font-primary-bold text-font-accent-grey">
          Medium
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-background-neutral" />
        <div className="h-3 w-2/3 rounded bg-background-neutral" />
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
        <div className="h-6 w-6 rounded-full bg-background-accent-green-bolder" />
        <span className="font-primary-light text-2xs text-font-subtle">
          Assigned to Alex
        </span>
      </div>
    </div>
  );
};
