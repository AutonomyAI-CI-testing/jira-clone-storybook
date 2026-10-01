const META_ITEMS = [
  { label: "Assignee", value: "Andy Davis" },
  { label: "Due", value: "Mar 14" },
  { label: "Priority", value: "Medium" },
];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-md border border-border bg-elevation-surface-raised p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-primary-black text-lg text-font">Test card</h2>
        <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary text-2xs text-font-brand">
          Task
        </span>
      </div>

      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A small static card rendered from a single component. It shows a fixed
        title, a short description and a few details.
      </p>

      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-2xs">
        {META_ITEMS.map(({ label, value }) => (
          <div key={label}>
            <dt className="font-primary-light text-font-subtlest">{label}</dt>
            <dd className="font-primary text-font">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="my-4 border-t border-border" />

      <div className="flex items-center justify-between gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background-accent-blue-bolder font-primary text-2xs text-font-inverse">
          AD
        </div>
        <span className="rounded bg-background-brand-bold px-3 py-1.5 font-primary text-sm text-font-inverse">
          Open
        </span>
      </div>
    </div>
  );
};
