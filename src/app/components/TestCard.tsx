/**
 * Smoke test for the Figma -> component path.
 *
 * Self-contained and props-free on purpose: it renders the "UI magician Agent"
 * panel from the attached Figma frame at approximate fidelity. Colours and
 * sizes are arbitrary values rather than design tokens because this design sits
 * outside the product's cobalt token set, and the brief is a smoke test.
 */

interface IconProps {
  className?: string;
}

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[28px] w-[28px]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[22px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-6">
    <div className="mb-3 flex items-center gap-3">
      <label htmlFor={id} className="text-[17px] text-[#cfcfcf]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="w-full rounded-[4px] border border-[#5c5c5c] bg-[#2a2a2a] px-4 py-4 text-[17px] text-[#d9d9d9] placeholder:text-[#7d7d7d]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const actionButtonClass =
  "min-w-[170px] rounded-[8px] bg-[#a8472a] px-6 py-4 text-[19px] text-[#b3a49d]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1c1c1c] px-11 pt-10 pb-16 font-primary text-[#d9d9d9]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[26px] leading-none text-[#d9d9d9]">
          UI magician Agent
        </h2>
        <button type="button" aria-label="Settings" className="text-[#c9c9c9]">
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3 text-[#9e9e9e]">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0" />
        <span className="truncate text-[19px]">
          From entire frame to a singl…
        </span>
      </div>

      <h3 className="mt-16 flex items-center gap-2 font-primary-bold text-[22px] text-[#e8e8e8]">
        <ChevronUpIcon className="h-[22px] w-[22px] shrink-0" />
        Add New Design
      </h3>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />

      <div className="mt-10 flex justify-center gap-9">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-bold text-[22px] text-[#e8e8e8]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
