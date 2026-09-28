export const TestCard = (): JSX.Element => {
  const metaRows = [
    { label: "Status", value: "Ready for review" },
    { label: "Owner", value: "Daniel Serrano" },
    { label: "Updated", value: "Just now" },
  ];

  return (
    <div id="testElem" className="flex justify-center bg-background-subtle p-8">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded border border-border bg-elevation-surface-raised p-6 shadow-xs">
        <div className="flex flex-col gap-1">
          <span className="font-primary-light text-2xs uppercase tracking-wide text-font-subtlest">
            Smoke test
          </span>
          <h2 className="font-primary-black text-2xl text-font">TestCard</h2>
        </div>

        <p className="font-primary-light text-sm text-font-subtle">
          A self-contained placeholder card used to check that a component
          renders end to end in the preview.
        </p>

        <dl className="flex flex-col">
          {metaRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between border-t border-border py-2 first:border-t-0"
            >
              <dt className="font-primary-light text-2xs uppercase tracking-wide text-font-subtlest">
                {row.label}
              </dt>
              <dd className="font-primary text-sm text-font">{row.value}</dd>
            </div>
          ))}
        </dl>

        <p className="font-primary-light text-2xs text-font-subtlest">
          Placeholder content — no data is loaded.
        </p>
      </div>
    </div>
  );
};
