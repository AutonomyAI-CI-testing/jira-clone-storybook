import type { JSX } from "react";

/**
 * Settings icon component (gear/cog)
 */
const SettingsIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <path
      d="M8 10a2 2 0 100-4 2 2 0 000 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.933 10a1.1 1.1 0 00.22 1.213l.04.04a1.333 1.333 0 11-1.886 1.887l-.04-.04a1.1 1.1 0 00-1.214-.22 1.1 1.1 0 00-.666 1.007v.113a1.333 1.333 0 01-2.667 0v-.06A1.1 1.1 0 006 12.933a1.1 1.1 0 00-1.213.22l-.04.04a1.333 1.333 0 11-1.887-1.886l.04-.04a1.1 1.1 0 00.22-1.214 1.1 1.1 0 00-1.007-.666h-.113a1.333 1.333 0 010-2.667h.06A1.1 1.1 0 003.067 6a1.1 1.1 0 00-.22-1.213l-.04-.04a1.333 1.333 0 111.886-1.887l.04.04a1.1 1.1 0 001.214.22h.053a1.1 1.1 0 00.667-1.007v-.113a1.333 1.333 0 112.666 0v.06A1.1 1.1 0 0010 3.067a1.1 1.1 0 001.213-.22l.04-.04a1.333 1.333 0 111.887 1.886l-.04.04a1.1 1.1 0 00-.22 1.214v.053a1.1 1.1 0 001.007.667h.113a1.333 1.333 0 010 2.666h-.06a1.1 1.1 0 00-1.007.667z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron icon component (used for expandable sections)
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 5l4-4 4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon component (used for tooltips/help text)
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5h.005"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[468px] rounded-lg bg-[#1e1e1a] p-10">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-sans text-2xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-12 flex items-center gap-1.5">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="font-sans text-base font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section: Add New Design */}
      <div className="mb-10 flex items-center gap-1.5">
        <ChevronIcon className="text-[#b2b2b1]" />
        <h3 className="font-sans text-2xl font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-1.5">
          <label
            htmlFor="token"
            className="font-sans text-base font-semibold text-[#a3a3a2]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-[#a5adad] bg-[#272822] px-6 py-5 font-sans text-base font-semibold text-white placeholder:text-[#737470] focus:outline-none focus:ring-2 focus:ring-[#a5adad]"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-1.5">
          <label
            htmlFor="url"
            className="font-sans text-base font-semibold text-[#a4a4a3]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          id="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded-md border-2 border-[#929291] bg-[#272822] px-6 py-5 font-sans text-base font-semibold text-white placeholder:text-[#71726e] focus:outline-none focus:ring-2 focus:ring-[#929291]"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-8 py-5 font-sans text-base font-semibold text-[#8c8078] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#843a17]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-8 py-5 font-sans text-base font-semibold text-[#8c8078] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#843a17]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="font-sans text-2xl font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center">
        <p className="font-sans text-base text-[#a3a3a2]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
