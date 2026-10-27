// Smoke-test component: a static replica of a Figma frame (a dark settings
// panel). No props, no state, no behaviour — layout only.
//
// The frame is not a surface of this product, so it is styled from the raw
// palette variables the app already declares (--DarkNeutral*, --Orange800)
// rather than the semantic theme layer, which keeps the panel dark in any
// theme. Values are approximations of the frame, not a fidelity target.

const chevronUpIcon = (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const infoIcon = (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="16" x2="12" y2="11" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const gearIcon = (
  <svg
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const fields: { id: string; label: string; placeholder: string }[] = [
  { id: "personal-access-token", label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxx" },
  { id: "design-url", label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const actions: string[] = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-8 py-7 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-[var(--DarkNeutral900)]"
        >
          {gearIcon}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2 text-[var(--DarkNeutral600)]">
        {chevronUpIcon}
        <span className="truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="h-[150px]" />

      <h2 className="flex items-center gap-2 font-primary-bold text-xl">
        {chevronUpIcon}
        Add New Design
      </h2>

      {fields.map((field) => (
        <div key={field.id} className="mt-8">
          <label
            htmlFor={field.id}
            className="flex items-center gap-2 text-base text-[var(--DarkNeutral900)]"
          >
            {field.label}
            {infoIcon}
          </label>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-4 py-3 text-base text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]"
          />
        </div>
      ))}

      <div className="mt-8 flex gap-8">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="flex-1 cursor-pointer rounded-md bg-[var(--Orange800)] py-4 text-base text-[var(--DarkNeutral1000)]"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-auto pt-16 font-primary-bold text-xl">
        Recent Breakdowns
      </h2>
    </div>
  );
};
