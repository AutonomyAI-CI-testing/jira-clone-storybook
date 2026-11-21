/**
 * Smoke-test component reproducing the "UI magician Agent" panel from the
 * attached Figma frame. Self-contained: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[1016px] w-[508px] flex-col bg-[#1b1b1b] px-10 py-10 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[20px]">UI magician Agent</span>
      <GearIcon className="h-6 w-6" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="min-w-0 truncate text-[16px] text-[#b3b3b3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[180px] flex items-center gap-2">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-12">
      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="testcard-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="min-w-[168px] rounded-md bg-[#b8460f] px-6 py-4 text-[18px] text-[#f7e9e2]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-[16px] text-[#c9c9c9]">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 shrink-0" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-[#8a8a8a] bg-[#1e1e1e] px-4 py-3.5 text-[16px] text-[#d0d0d0] outline-none placeholder:text-[#9a9a9a]"
    />
  </div>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#d9d9d9" />
    <circle cx="12" cy="7.5" r="1.4" fill="#1b1b1b" />
    <rect x="10.8" y="10.5" width="2.4" height="7" rx="1.2" fill="#1b1b1b" />
  </svg>
);

interface IconProps {
  className: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
