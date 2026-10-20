import cx from "classix";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const CollapsibleRow = ({ label, muted }: CollapsibleRowProps): JSX.Element => (
  <div
    className={cx(
      "flex items-center gap-3",
      muted ? "text-[#9a9a9a]" : "text-[#c8c8c8]"
    )}
  >
    <ChevronUpIcon />
    <span className={cx("truncate", muted ? "text-xl" : "text-[26px]")}>
      {label}
    </span>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="mb-3 flex items-center gap-3 text-[#b5b5b5]">
      <span className="text-xl">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-[68px] w-full rounded border border-[#6f6f6f] bg-[#2a2a2a] px-5 font-primary-light text-xl text-[#c8c8c8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[508px] bg-[#1c1c1c] px-10 py-8 text-[#c8c8c8]">
    <div className="flex items-start justify-between">
      <h1 className="text-[26px] leading-tight">UI magician Agent</h1>
      <button type="button" aria-label="Settings">
        <GearIcon />
      </button>
    </div>

    <div className="mt-6">
      <CollapsibleRow label="From entire frame to a singl..." muted />
    </div>

    <div className="mt-24">
      <CollapsibleRow label="Add New Design" />
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file:" />

    <div className="mt-12 flex gap-9">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[68px] w-[170px] rounded-md bg-[#8b3d1e] text-xl text-[#c9c9c9]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 text-2xl text-[#b5b5b5]">Recent Breakdowns</h2>
  </div>
);

interface CollapsibleRowProps {
  label: string;
  muted?: boolean;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
