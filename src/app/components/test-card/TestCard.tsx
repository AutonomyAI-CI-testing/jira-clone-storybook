import cx from "classix";

/**
 * Info icon SVG component used for form field labels.
 * Indicates additional information is available for the field.
 */
const InfoIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#A3A3A2]"
  >
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M6 8V6M6 4H6.005"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Chevron up icon used for collapsible sections.
 */
const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8B9291]"
  >
    <path
      d="M3.5 8.5L7 5L10.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Sparkle icon representing the UI magician agent.
 */
const SparkleIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#B5B5B5]"
  >
    <circle
      cx="8"
      cy="8"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M8 1L8.5 3.5L8 6M8 10L8.5 12.5L8 15M15 8L12.5 8.5L10 8M6 8L3.5 8.5L1 8M12.5 12.5L11 11L9.5 9.5M9.5 6.5L11 5L12.5 3.5M3.5 3.5L5 5L6.5 6.5M6.5 9.5L5 11L3.5 12.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Action button with consistent styling for primary actions.
 */
const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    className={cx(
      "flex h-[42px] w-[100px] items-center justify-center rounded",
      "bg-[#843A17] text-[11.5px] font-semibold text-[#8C8078]",
      "hover:opacity-90 active:opacity-80"
    )}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[508px] rounded bg-[#1C1D17] p-5 pb-8 font-primary">
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <SparkleIcon />
      </div>

      {/* Subtitle Row - Truncated description */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-[11.5px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section - Collapsible header */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#B2B2B1]"
        >
          <path
            d="M3.5 8.5L7 5L10.5 8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[13.5px] font-semibold text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input Group */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-1">
          <label
            htmlFor="token-input"
            className="text-[11.5px] font-semibold text-[#A3A3A2]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        {/* Read-only display of Figma token format */}
        <input
          id="token-input"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            "w-full rounded border border-[#A5ADAD] bg-[#3A3B36] px-3 py-2",
            "text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]",
            "focus:outline-none focus:ring-1 focus:ring-[#A5ADAD]"
          )}
        />
      </div>

      {/* Design URL Input Group */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-1">
          <label
            htmlFor="url-input"
            className="text-[11.5px] font-semibold text-[#A4A4A3]"
          >
            Design URL
          </label>
          <span className="text-[#A4A4A3]">
            <InfoIcon />
          </span>
        </div>
        {/* Read-only display with heavier border for visual emphasis */}
        <input
          id="url-input"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={cx(
            "w-full rounded border-2 border-[#929291] bg-[#3A3B36] px-3 py-2",
            "text-[10.5px] font-semibold text-[#71726E] placeholder:text-[#71726E]",
            "focus:outline-none focus:ring-1 focus:ring-[#929291]"
          )}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className="text-[13.5px] font-semibold text-[#B0B0B0]">
        Recent Breakdowns
      </h2>

      {/* Footer Section */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center text-[11.5px] font-semibold text-[#A3A3A2]">
        © AutonomyAI
      </div>
    </div>
  );
};
