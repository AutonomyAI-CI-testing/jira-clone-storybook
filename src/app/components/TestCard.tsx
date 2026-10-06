import cx from "classix";

/**
 * TestCard
 *
 * A self-contained smoke-test card reproducing the attached Figma frame
 * ("UI magician Agent" panel). Deliberately standalone: no props, no state and
 * no imports from other components, so the whole thing lives in this one file.
 *
 * Colors and type sizes are Tailwind arbitrary values rather than design
 * tokens on purpose — this frame is a foreign design and the smoke test does
 * not map it onto the repo's semantic token system.
 */

const ACTION_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#d0d0d0]";

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoCircleIcon = (): JSX.Element => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder, variant = "default" }: FieldProps) => (
  <label className="block">
    <span className="flex items-center gap-[6px] text-[11.5px] font-semibold text-[#a4a4a3]">
      {label}
      <InfoCircleIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-[10px] h-[36px] w-full rounded-[2px] bg-[#272822] px-3",
        "text-[11.5px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]",
        variant === "emphasized"
          ? "border-2 border-[#929291]"
          : "border border-[#a5adad]"
      )}
    />
  </label>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,sans-serif] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-[16px] flex items-center gap-[6px]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[76px] flex items-center gap-[6px]">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[26px] flex flex-col gap-[20px]">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/"
          variant="emphasized"
        />
      </div>

      {/* Actions */}
      <div className="mt-[30px] flex gap-[17px]">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[38px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
  variant?: "default" | "emphasized";
}
