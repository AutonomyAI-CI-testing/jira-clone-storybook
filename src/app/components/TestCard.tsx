import cx from "classix";

/**
 * TestCard — a self-contained rebuild of the "UI magician Agent" Figma frame.
 * Smoke test: approximate spacing/colour/type values are copied from the frame's
 * extracted style guide, and nothing here is wired to state or props.
 */

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="8" r="4.4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7" cy="8" r="1.7" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7 1v2.4M7 12.6V15M0 8h2.4M11.6 8H14M2.05 3.05l1.7 1.7M10.25 11.25l1.7 1.7M11.95 3.05l-1.7 1.7M3.75 11.25l-1.7 1.7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7.5" cy="4.7" r="0.9" fill="currentColor" />
    <path d="M7.5 7v3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const FieldLabel = ({ label, className }: { label: string; className: string }) => (
  <div className={cx("flex items-center gap-5", className)}>
    <span className="text-[11.5px] text-[#A4A4A3]">{label}</span>
    <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#A4A4A3]" />
  </div>
);

const FieldBox = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className: string;
}) => (
  <div className={cx("flex w-full items-center bg-[#272822]", className)}>
    <span className="truncate">{placeholder}</span>
  </div>
);

const SECTION_COLOR = "text-[13.5px] text-[#B2B2B1]";

const buttonLabels = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-hidden bg-[#1B1C16] p-5 font-primary-bold text-[13.5px] text-[#B5B5B5]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <GearIcon className="h-4 w-3.5 shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8B9291]" />
      <span className="truncate text-[11.5px] text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className={cx("mt-[75px] flex items-center gap-[5px] pl-[6px]", SECTION_COLOR)}>
      <ChevronUp className="h-2 w-3 shrink-0 text-[#B2B2B1]" />
      <span>Add New Design</span>
    </div>

    <FieldLabel label="Personal Access Token" className="mt-6" />
    <FieldBox
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3.5 h-9 border border-[#A5ADAD] px-[19px] text-[11.5px] text-[#737470]"
    />

    <FieldLabel label="Design URL" className="mt-2" />
    <FieldBox
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] border-2 border-[#929291] px-5 text-[10.5px] text-[#71726E]"
    />

    <div className="mt-5 flex justify-center gap-[19px]">
      {buttonLabels.map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] text-[11.5px] text-[#8C8078]"
        >
          {label}
        </div>
      ))}
    </div>

    <div className="mt-[46px] text-[13.5px] text-[#B2B2B2]">Recent Breakdowns</div>
  </div>
);
