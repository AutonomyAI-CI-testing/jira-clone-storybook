const fields = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actionLabels = ["Awesome", "Prepare"];

const gearIcon = (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const chevronUpIcon = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const infoIcon = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0 text-icon-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5h.01" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-icon-subtle"
      >
        {gearIcon}
      </button>
    </div>

    <div className="mt-8 flex min-w-0 items-center gap-3 text-font-subtle">
      {chevronUpIcon}
      <span className="truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-16">
      <div className="flex items-center gap-3">
        {chevronUpIcon}
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-5">
        {fields.map(({ id, label, placeholder }) => (
          <div key={id}>
            <div className="flex items-center gap-2">
              <label htmlFor={id} className="text-base text-font-subtle">
                {label}
              </label>
              {infoIcon}
            </div>
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              className="mt-3 w-full rounded border border-border bg-background-input px-6 py-4 text-base text-font placeholder:text-font-subtlest"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-6">
        {actionLabels.map((label) => (
          <button
            key={label}
            type="button"
            className="w-[167px] cursor-pointer rounded bg-[#8a3d1f] py-5 text-lg text-[#c98a6a]"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
