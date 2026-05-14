/**
 * SettingsIcon component - gear/cog icon for settings
 */
const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <path
      d="M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M12 8c0-.3-.1-.5-.2-.7l1.2-1.5-2-1.2-1.6.8c-.4-.3-.9-.5-1.4-.6V3h-2v1.8c-.5.1-1 .3-1.4.6L2 4.6l-2 1.2 1.2 1.5c-.1.2-.2.4-.2.7s.1.5.2.7L0 10.2l2 1.2 1.6-.8c.4.3.9.5 1.4.6V13h2v-1.8c.5-.1 1-.3 1.4-.6l1.6.8 2-1.2-1.2-1.5c.1-.2.2-.4.2-.7Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/**
 * ChevronUpIcon component - small upward chevron icon
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 4 4 1 7 4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * InfoIcon component - information circle icon for tooltips
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="More information"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5h.01"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[420px] rounded bg-[#1a1a17] p-10 font-semibold">
      {/* Header: Title + Settings Icon */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[20px] leading-[24px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Subtitle Row: Chevron + Description */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon className="shrink-0 text-[#8b9291]" />
        <p className="text-[16px] leading-[19px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronUpIcon className="shrink-0 text-[#b2b2b1]" />
        <h3 className="text-[20px] leading-[24px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-1">
          <label
            htmlFor="token"
            className="text-[16px] leading-[19px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[65px] w-full rounded border border-[#a5adad] bg-[#272822] px-6 text-[16px] leading-[19px] text-[#737470] placeholder:text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-1">
          <label
            htmlFor="url"
            className="text-[16px] leading-[19px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-[65px] w-full rounded border-2 border-[#929291] bg-[#272822] px-6 text-[16px] leading-[19px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none focus:ring-2 focus:ring-[#929291]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-20 mt-12 flex items-center gap-6">
        <button className="h-[60px] w-[160px] rounded bg-[#843a17] text-[18px] leading-[22px] text-[#8c8078] transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#843a17]">
          Awesome
        </button>
        <button className="h-[60px] w-[160px] rounded bg-[#843a17] text-[18px] leading-[22px] text-[#8c8078] transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#843a17]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-[20px] leading-[24px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-300 pt-3 text-center text-[16px] text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
