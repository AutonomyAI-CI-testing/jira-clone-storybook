import cx from "classix";

/**
 * Standalone card reproduced from the Figma frame "Test Page - Simple".
 * Self-contained: no props, no state, not wired into the app.
 * Colours and sizes come from the frame's extracted style guide, expressed as
 * Tailwind utilities (arbitrary values for the frame's own dark palette).
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-3.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1.5 6.2 6 1.8l4.5 4.4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 15 15"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
  >
    <circle cx="7.5" cy="7.5" r="6.9" />
    <path d="M7.5 7v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

const Field = ({
  className,
  label,
  placeholder,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-[18px] text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px]">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-3 w-full bg-[#272822] px-[19px] leading-[13.92px]",
        inputClassName
      )}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-[10px] text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3 shrink-0" />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      inputClassName="h-9 border border-[#a5adad] text-[11.5px] text-[#737470]"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e]"
    />

    <div className="mt-[23px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <p className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

interface FieldProps {
  className: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}
