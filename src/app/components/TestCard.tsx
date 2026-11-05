const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-7 w-7 shrink-0 text-[#c9c9c9]"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    width={size}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#c9c9c9]"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="11" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <>
    <div className="mt-10 flex items-center gap-3 text-[#d0d0d0]">
      <label className="text-[19px] leading-7" htmlFor={id}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      className="mt-3 h-[70px] w-full border border-[#6b6b6b] bg-[#262626] px-6 text-[20px] text-[#8f8f8f] placeholder:text-[#8f8f8f]"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </>
);

export const TestCard = () => (
  <div
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#121212] px-9 pb-12 pt-10 font-primary text-[#d5d5d5]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[26px] leading-8 text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#b3b3b3]">
      <ChevronUpIcon />
      <span className="min-w-0 flex-1 truncate text-[20px] leading-6">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[180px] flex items-center gap-3 text-[#e0e0e0]">
      <ChevronUpIcon size={22} />
      <h2 className="font-primary-bold text-[22px] leading-7">
        Add New Design
      </h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-9">
      <button
        className="h-[72px] w-[170px] rounded-lg bg-[#9e3f14] text-[22px] text-[#e0cfc7]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[72px] w-[170px] rounded-lg bg-[#9e3f14] text-[22px] text-[#e0cfc7]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[22px] leading-7 text-[#e0e0e0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
