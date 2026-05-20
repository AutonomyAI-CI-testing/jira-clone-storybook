/**
 * InfoIcon: Information tooltip icon displayed next to form labels
 */
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#a4a4a3]"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.51"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * SettingsIcon: Atomic orbit icon displayed in the header
 */
const SettingsIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
    aria-label="Settings"
  >
    <circle
      cx="9"
      cy="9"
      r="2"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse
      cx="9"
      cy="9"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(45 9 9)"
    />
    <ellipse
      cx="9"
      cy="9"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(-45 9 9)"
    />
  </svg>
);

/**
 * ChevronIcon: Expandable/collapsible section indicator
 * @param direction - "up" or "down" to control chevron orientation
 * @param size - Size variant: "small" or "medium"
 */
const ChevronIcon = ({
  direction,
  size,
}: {
  direction: "up" | "down";
  size: "small" | "medium";
}) => {
  const isSmall = size === "small";
  const width = isSmall ? "8" : "12";
  const height = isSmall ? "5" : "8";
  const viewBox = isSmall ? "0 0 8 5" : "0 0 12 8";
  const pathD =
    direction === "up"
      ? isSmall
        ? "M1 4L4 1L7 4"
        : "M1 7L6 2L11 7"
      : isSmall
      ? "M1 1L4 4L7 1"
      : "M1 2L6 7L11 2";
  const colorClass = isSmall ? "text-[#8b9291]" : "text-[#b2b2b1]";

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={colorClass}
      aria-hidden="true"
    >
      <path
        d={pathD}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * TestCard: A configuration panel for Figma design integration
 *
 * This component displays a form for collecting Figma Personal Access Token
 * and Design URL inputs, along with action buttons and a recent breakdowns section.
 * The component is read-only (inputs are non-editable) and serves as a UI mockup.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans bg-[#1C1D17] py-8 pl-10 pr-6 text-white">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-left text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon direction="up" size="small" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section for adding new design */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon direction="up" size="medium" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field - read-only for display purposes */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <label
            htmlFor="pat"
            className="text-[11.5px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="pat"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL field - read-only for display purposes */}
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-3">
          <label
            htmlFor="url"
            className="text-[11.5px] font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-16 flex gap-[50px]">
        <button
          type="button"
          className="rounded bg-[#843A17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843A17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section - placeholder for future content */}
      <div className="mt-[100px]">
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
