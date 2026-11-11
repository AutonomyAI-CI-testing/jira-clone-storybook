/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: the frame's extracted style guide was not available, so the
 * colours, spacing and type sizes below are read off the frame image and are
 * deliberately approximate. The frame's grey/rust palette has no role in this
 * repo's semantic token set, and `theme.colors` here is a full override (so
 * stock palette classes such as `bg-gray-800` compile to nothing), hence the
 * arbitrary-value Tailwind classes.
 */

const buttonClass =
  "h-[72px] w-[171px] rounded-lg bg-[#a34527] font-primary-bold text-[22px] text-[#b09a90]";

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 8.9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 8.9v.01a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.06Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px]"
    aria-hidden="true"
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="h-[20px] w-[20px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[20px] text-[#c9c9c9]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-[22px] h-[57px] w-full rounded border border-solid border-[#555555] bg-[#252525] px-8 text-[18px] text-[#c9c9c9] placeholder:text-[#9a9a9a]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-10 pt-[46px] pb-16 text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#c9c9c9]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-[40px] flex items-center gap-4">
      <ChevronUpIcon />
      <span className="max-w-[340px] truncate text-[20px] text-[#9a9a9a]">
        From entire frame to a single page
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-4">
      <ChevronUpIcon />
      <span className="font-primary-bold text-[22px] text-[#c9c9c9]">
        Add New Design
      </span>
    </div>

    <div className="mt-[66px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-[48px]">
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="mt-[40px] flex justify-center gap-[34px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[100px] font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
