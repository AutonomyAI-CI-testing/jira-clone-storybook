const SAMPLE_ISSUE = {
  title: "Add a keyboard shortcut for creating an issue",
  description:
    "Pressing Shift + N from the board should open the create-issue panel with the title field already focused, so power users never have to reach for the mouse.",
  type: "Story",
  priority: "High",
  points: "3 points",
  assignee: { name: "Woody", initials: "WD" },
  key: "JC-128",
};

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[360px] w-full items-center justify-center bg-elevation-surface-sunken p-6"
  >
    <div className="flex w-[400px] flex-col rounded bg-elevation-surface-raised p-4 text-font shadow-sm outline outline-2 outline-transparent">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-background-brand-bold text-font-inverse">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          >
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 5.97-5.97a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </span>
        <h3 className="font-primary-bold text-lg leading-tight text-font">
          {SAMPLE_ISSUE.title}
        </h3>
      </div>

      <p className="mt-3 line-clamp-2 font-primary-light text-sm text-font-subtle">
        {SAMPLE_ISSUE.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="rounded bg-background-neutral px-2 py-0.5 text-2xs font-primary-bold uppercase text-font-subtle">
          {SAMPLE_ISSUE.type}
        </span>
        <span className="rounded bg-background-neutral px-2 py-0.5 text-2xs font-primary-bold uppercase text-font-subtle">
          {SAMPLE_ISSUE.priority}
        </span>
        <span className="rounded bg-background-neutral px-2 py-0.5 text-2xs font-primary-bold uppercase text-font-subtle">
          {SAMPLE_ISSUE.points}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="flex items-center gap-2">
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-background-accent-blue-bolder text-2xs font-primary-bold text-font-inverse">
            {SAMPLE_ISSUE.assignee.initials}
          </span>
          <span className="text-xs font-primary-light text-font-subtle">
            {SAMPLE_ISSUE.assignee.name}
          </span>
        </span>
        <span className="text-2xs font-primary-light uppercase text-font-subtlest">
          {SAMPLE_ISSUE.key}
        </span>
      </div>
    </div>
  </div>
);
