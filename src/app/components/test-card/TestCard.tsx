import cx from "classix";

/**
 * TestCard
 *
 * A one-off, self-contained reproduction of the "UI magician Agent" Figma frame
 * (https://www.figma.com/design/3r9cVXouOLnxb3HYN9sqQU/Test-Page---Simple--FOR-TESTING-?node-id=2-2).
 *
 * The literals below are the frame's own values, taken from its exported style
 * guide (1x frame space, 254x508), and are deliberately not the app's semantic
 * tokens: the frame is a standalone dark UI with no counterpart in the six
 * themes, and this component must look the same whatever theme is active.
 *
 * Icons are drawn inline because the frame's exported assets are raster images
 * wrapped in SVG, and pulling them in would mean adding files alongside this
 * component.
 */

const actionButton =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 pb-[62px] font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="leading-[16.34px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="leading-[16.34px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      borderClassName="border border-[#a5adad]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      borderClassName="border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={actionButton}>
        Awesome
      </button>
      <button type="button" className={actionButton}>
        Prepare
      </button>
    </div>

    <span className="mt-[46px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const Field = ({
  className,
  label,
  placeholder,
  borderClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-[10px] h-9 w-full bg-[#272822] px-[19px] font-primary text-[11.5px] leading-[13.92px] text-[#a4a4a3] outline-none placeholder:text-[#737470]",
        borderClassName
      )}
    />
  </div>
);

const ChevronUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1.5 6.5L6 2L10.5 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.3v4.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}
