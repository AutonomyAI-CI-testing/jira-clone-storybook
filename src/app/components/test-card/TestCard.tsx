// Icon component for the decorative header icon
const HeaderIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="13" cy="13" r="1.5" fill="currentColor" />
    <circle cx="13" cy="7.5" r="1.5" fill="currentColor" />
    <circle cx="18.5" cy="13" r="1.5" fill="currentColor" />
    <circle cx="13" cy="18.5" r="1.5" fill="currentColor" />
    <circle cx="7.5" cy="13" r="1.5" fill="currentColor" />
    <circle cx="16.2" cy="9.8" r="1.2" fill="currentColor" />
    <circle cx="16.2" cy="16.2" r="1.2" fill="currentColor" />
    <circle cx="9.8" cy="16.2" r="1.2" fill="currentColor" />
    <circle cx="9.8" cy="9.8" r="1.2" fill="currentColor" />
  </svg>
);

// Chevron icon used for collapsed/expandable sections
const ChevronIcon = ({
  size = "small",
  className = "",
}: {
  size?: "small" | "large";
  className?: string;
}) => {
  const dimensions =
    size === "small"
      ? {
          width: 14,
          height: 9,
          viewBox: "0 0 14 9",
          strokeWidth: 2,
          path: "M1 8L7 2L13 8",
        }
      : {
          width: 18,
          height: 12,
          viewBox: "0 0 18 12",
          strokeWidth: 2.5,
          path: "M1 11L9 3L17 11",
        };

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={dimensions.viewBox}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={dimensions.path}
        stroke="currentColor"
        strokeWidth={dimensions.strokeWidth}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

// Info icon for tooltips or additional information
const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    aria-label="More information"
  >
    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.2" />
    <text
      x="9"
      y="13"
      fontSize="12"
      fontWeight="bold"
      fill="currentColor"
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

// Reusable form field component with label and optional info icon
const FormField = ({
  label,
  placeholder,
  borderWidth = "1",
  labelColor,
  inputColor,
}: {
  label: string;
  placeholder: string;
  borderWidth?: "1" | "2";
  labelColor: string;
  inputColor: string;
}) => {
  const borderClass = borderWidth === "1" ? "border" : "border-2";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span
          className={`text-[13px] font-semibold leading-[16px] ${labelColor}`}
        >
          {label}
        </span>
        <InfoIcon className={labelColor} />
      </div>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`w-full ${borderClass} border-[${
          borderWidth === "1" ? "#a5adad" : "#929291"
        }] bg-[#272822] px-4 py-5 text-[13px] font-semibold leading-[16px] ${inputColor} placeholder:${inputColor}`}
      />
    </div>
  );
};

export const TestCard = () => {
  return (
    <div className="flex w-80 flex-col gap-8 bg-[#1a1a17] px-8 py-8 font-primary-bold text-[#b5b5b5]">
      {/* Header section with agent name and decorative icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-semibold leading-[24px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <HeaderIcon />
      </div>

      {/* Collapsible subtitle - truncated for space */}
      <div className="flex items-center gap-3 pl-8">
        <ChevronIcon size="small" className="text-[#8b9291]" />
        <span className="text-[13px] font-semibold leading-[16px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual separator for section spacing */}
      <div className="h-28" />

      {/* Section header for design input area */}
      <div className="flex items-center gap-3">
        <ChevronIcon size="large" className="text-[#b2b2b1]" />
        <h3 className="text-[18px] font-semibold leading-[22px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Figma Personal Access Token input field (read-only for display) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold leading-[16px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#a5adad] bg-[#272822] px-4 py-5 text-[13px] font-semibold leading-[16px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Figma Design URL input field (thicker border for visual emphasis) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold leading-[16px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 border-[#929291] bg-[#272822] px-4 py-5 text-[13px] font-semibold leading-[16px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Action buttons - matching styles for visual consistency */}
      <div className="flex gap-4">
        <button className="rounded bg-[#843a17] px-10 py-5 text-[14px] font-semibold leading-[17px] text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-10 py-5 text-[14px] font-semibold leading-[17px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Visual separator before footer content */}
      <div className="h-32" />

      {/* Section for historical data */}
      <h3 className="text-[18px] font-semibold leading-[22px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-sm">© AutonomyAI</span>
      </div>
    </div>
  );
};
