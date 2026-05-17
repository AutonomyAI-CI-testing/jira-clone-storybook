/**
 * Chevron icon component used for collapsible sections
 */
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M4 10l4-4 4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon component used for help tooltips
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 5.5v4M8 11h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Settings gear icon
 */
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 15.5a3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill="currentColor"
    />
    <path
      d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"
      fill="currentColor"
    />
  </svg>
);

/**
 * TestCard component - A form interface for configuring Figma design integration.
 * Provides inputs for personal access token and design URL, with action buttons
 * for processing the design.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      className="min-h-screen w-full px-8 py-8 text-font-subtle"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#b5b5b5]">UI magician Agent</h2>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle indicating truncated text */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="text-[#8b9291]" />
          <span className="text-base text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design section header */}
      <div className="mb-8 flex items-center gap-3">
        <ChevronUpIcon className="text-[#b0b0b0]" />
        <h3 className="text-lg font-bold text-[#b0b0b0]">Add New Design</h3>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-base text-[#a3a3a2]">
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] px-4 py-4 text-base text-[#737470] placeholder-[#737470] focus:outline-none"
          style={{ backgroundColor: "#272822" }}
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-base text-[#a4a4a3]">Design URL</label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] px-4 py-4 text-base text-[#71726e] placeholder-[#71726e] focus:outline-none"
          style={{ backgroundColor: "#272822" }}
        />
      </div>

      {/* Action buttons for processing the design */}
      <div className="mb-10 flex gap-3">
        <button
          className="flex-1 rounded px-6 py-4 text-base text-[#8c8078]"
          style={{ backgroundColor: "#843a17" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-6 py-4 text-base text-[#8c8078]"
          style={{ backgroundColor: "#843a17" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h3 className="text-lg font-bold text-[#b2b2b1]">Recent Breakdowns</h3>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-sm">© AutonomyAI</p>
      </div>
    </div>
  );
};
