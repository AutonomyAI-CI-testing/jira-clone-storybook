import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Icon sizes for consistent spacing
const ICON_SIZES = {
  large: 24,
  medium: 20,
  small: 16,
} as const;

/**
 * TestCard Component
 *
 * A form card for configuring design integration with Figma.
 * Collects Personal Access Token and Design URL for the UI magician Agent.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-[508px] flex-col gap-6 rounded-lg bg-[#2a2520] p-6"
      role="region"
      aria-label="UI magician Agent configuration"
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg text-[#b6c2cf]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#b6c2cf] hover:opacity-80"
        >
          <FiSettings size={ICON_SIZES.large} />
        </button>
      </div>

      {/* Collapsed/minimized subtitle section */}
      <div className="flex items-center gap-2">
        <FiChevronUp
          className="text-[#8c9bab]"
          size={ICON_SIZES.medium}
          aria-hidden="true"
        />
        <span className="font-primary text-sm text-[#8c9bab]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expanded section header for adding new design */}
      <div className="flex items-center gap-2">
        <FiChevronUp
          className="text-[#b6c2cf]"
          size={ICON_SIZES.medium}
          aria-hidden="true"
        />
        <span className="font-primary-bold text-base text-[#b6c2cf]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="personal-access-token"
            className="font-primary text-sm text-[#b6c2cf]"
          >
            Personal Access Token
          </label>
          <button
            type="button"
            aria-label="Personal Access Token information"
            className="text-[#8c9bab] hover:opacity-80"
          >
            <FiInfo size={ICON_SIZES.small} />
          </button>
        </div>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          aria-describedby="token-help"
          className="rounded-md border border-[#4a4440] bg-[#3a342e] px-4 py-3 font-primary text-sm text-[#8c9bab] placeholder-[#8c9bab] focus:outline-none focus:ring-2 focus:ring-[#b65c02]"
        />
      </div>

      {/* Design URL input field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="design-url"
            className="font-primary text-sm text-[#b6c2cf]"
          >
            Design URL
          </label>
          <button
            type="button"
            aria-label="Design URL information"
            className="text-[#8c9bab] hover:opacity-80"
          >
            <FiInfo size={ICON_SIZES.small} />
          </button>
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          aria-describedby="url-help"
          className="rounded-md border border-[#4a4440] bg-[#3a342e] px-4 py-3 font-primary text-sm text-[#8c9bab] placeholder-[#8c9bab] focus:outline-none focus:ring-2 focus:ring-[#b65c02]"
        />
      </div>

      {/* Primary action buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b65c02] px-6 py-3 font-primary-bold text-sm text-[#e8a070] hover:bg-[#a05302] active:bg-[#8a4602]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b65c02] px-6 py-3 font-primary-bold text-sm text-[#e8a070] hover:bg-[#a05302] active:bg-[#8a4602]"
        >
          Prepare
        </button>
      </div>

      {/* Recent activity section header */}
      <div>
        <h2 className="font-primary-bold text-base text-[#b6c2cf]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="font-primary text-sm text-[#b6c2cf]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
