const buttonClass =
  "flex-1 rounded-md bg-[#9e3d1b] px-4 py-4 font-primary-bold text-[var(--DarkNeutral1100)]";

const GearIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9.6a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 11.2V16.5" strokeLinecap="round" />
    <circle cx="12" cy="7.9" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-4 font-primary-light text-[15px] text-[var(--DarkNeutral1100)]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-sm border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-5 py-5 font-primary-light text-[15px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral-100)] px-10 py-10 text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <span className="text-[var(--DarkNeutral600)]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-7 flex items-center gap-3 font-primary-light text-sm text-[var(--DarkNeutral600)]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-5">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
