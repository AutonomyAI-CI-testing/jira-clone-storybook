/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent"
 * panel from the referenced Figma frame.
 *
 * Smoke test only: no props, no state, no interaction. Colours, spacing and
 * typography are approximations read off the reference image, not values the
 * design declares, and they deliberately bypass the app's semantic tokens
 * (the reference is a dark panel with rust buttons, which the palette has no
 * roles for).
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const actionButtonClass =
  "w-[168px] rounded-lg bg-[#96401d] py-6 text-[17px] text-[#b8b8b8]";

const Field = ({ id, label, placeholder, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3 text-[#c8c8c8]">
      <label htmlFor={id} className="text-[16px]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-[#7d7d7d] bg-[#2a2a2a] px-10 py-5 text-[17px] text-[#d6d6d6] placeholder:text-[#6b6b6b] focus:outline-none"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pt-10 pb-14 font-primary text-[#d6d6d6]"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-bold text-[22px] leading-tight text-[#d6d6d6]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#e0e0e0]"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[17px] text-[#a0a0a0]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Empty design area in the reference tool */}
      <div className="h-[180px]" aria-hidden="true" />

      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="font-primary-bold text-[20px] text-[#e0e0e0]">
          Add New Design
        </h3>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-9"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-5"
      />

      <div className="mt-10 flex justify-center gap-9">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-12 font-primary-bold text-[20px] text-[#e0e0e0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
