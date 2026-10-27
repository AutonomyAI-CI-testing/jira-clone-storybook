/**
 * Smoke-test component recreating the "Add New Design" panel from the Figma
 * frame. Self-contained: no props, no state, no app imports. The dark palette
 * is deliberately literal so the card renders the same under every app theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-9 pb-16 pt-10 font-primary text-[#e0e0e0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-white">UI magician Agent</h1>
      <GearIcon className="shrink-0 text-white" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-[#a0a0a0]" />
      <span className="truncate text-[17px] text-[#a0a0a0]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-white" />
      <h2 className="font-primary-bold text-[22px] text-white">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-14"
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-9"
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-14 flex gap-[34px] pl-[52px]">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[168px] rounded-lg bg-[#9c3a1c] text-[17px] text-[#d9d9d9]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-bold text-xl text-white">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[18px] text-[#e0e0e0]">
        {label}
      </label>
      <InfoIcon className="shrink-0 text-[#e0e0e0]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[60px] w-full border border-[#8a8a8a] bg-[#242424] px-5 text-[17px] text-[#e0e0e0] placeholder:text-[#8c8c8c]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const GearIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="28"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="28"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="20"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}
