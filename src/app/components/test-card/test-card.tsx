/**
 * Info icon button component used in form field labels.
 * Provides visual indicator for fields that may require additional context.
 */
const InfoIcon = (): JSX.Element => (
  <button className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#6b6b6b] text-[#8b8b8b] hover:border-[#7b7b7b] focus-visible:outline-2">
    <svg
      width="3"
      height="3"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
    >
      <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="7.5"
        y="8"
        textAnchor="middle"
        fontSize="4"
        fill="currentColor"
        dy=".3em"
      >
        i
      </text>
    </svg>
  </button>
);

/**
 * Collapsible chevron icon button.
 * Used for expandable sections like collapsible design items.
 */
const ChevronIcon = (): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-2 w-2"
  >
    <path d="M7 4.5L4 0.5L1 4.5" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

/**
 * Options/menu icon button in the header.
 * Provides access to card actions or settings.
 */
const OptionsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
  >
    <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="7" cy="3" r="1.5" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="11" cy="8" r="1.5" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="3" cy="8" r="1.5" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="10" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

/**
 * TestCard component displays a settings panel for the UI magician agent.
 *
 * Features:
 * - Agent name and options menu in the header
 * - Collapsible section showing the current task
 * - Design input form with Personal Access Token and Design URL fields
 * - Action buttons to trigger agent operations (Awesome, Prepare)
 * - Recent breakdowns section and footer with copyright
 *
 * The component uses a dark theme color scheme appropriate for a design tool interface.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#2b2b2b] p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex h-6 w-6 items-center justify-center text-[#8b8b8b] hover:text-[#a8a8a8] focus-visible:outline-2">
          <OptionsIcon />
        </button>
      </div>

      {/* Collapsible section */}
      <div className="mb-24 flex items-center gap-2">
        <button className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#8b9291] hover:text-[#a0a0a0] focus-visible:outline-2">
          <ChevronIcon />
        </button>
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-12 flex items-center gap-2">
        <button className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#a0a0a0] hover:text-[#b0b0b0] focus-visible:outline-2">
          <ChevronIcon />
        </button>
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-8">
        <label className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold leading-[12.71px] text-[#737470] placeholder-[#737470] focus:border-[#a0a0a0] focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <label className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder-[#71726e] focus:border-[#a0a0a0] focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-16 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] hover:bg-[#954219] focus-visible:outline-2 active:bg-[#702f13]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] hover:bg-[#954219] focus-visible:outline-2 active:bg-[#702f13]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-gray-300 mt-3 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#a0a0a0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
