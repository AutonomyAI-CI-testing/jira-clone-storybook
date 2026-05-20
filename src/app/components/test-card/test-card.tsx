import cx from "classix";

// Icon components for better readability and reusability
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="3"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </svg>
);

// Extracted label with info icon pattern for reusability
const LabelWithInfo = ({ text, className }: { text: string; className?: string }) => (
  <div className="mb-4 flex items-center gap-2">
    <label className={cx("text-sm font-semibold", className)}>
      {text}
    </label>
    <InfoIcon className={cx("h-4 w-4", className)} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-80 rounded-lg bg-[#1a1a17] p-6",
        "font-['Inter',sans-serif]"
      )}
    >
      {/* Header with title and settings access */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon className="h-6 w-6 text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle section - chevron indicates expandable content */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="h-5 w-5 text-[#8b9291]" />
        <span className="text-sm font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible form section for adding new designs */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpIcon className="h-5 w-5 text-[#b2b2b1]" />
        <h2 className="text-base font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      <LabelWithInfo text="Personal Access Token" className="text-[#a4a4a3]" />

      {/* Read-only token input showing placeholder format */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className={cx(
          "mb-6 w-full rounded border border-[#a5adad] bg-[#272822]",
          "px-4 py-3 text-sm font-semibold text-[#737470]",
          "outline-none placeholder:text-[#737470]"
        )}
      />

      <LabelWithInfo text="Design URL" className="text-[#a3a3a2]" />

      {/* Read-only URL input with thicker border for visual emphasis */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className={cx(
          "mb-6 w-full rounded border-2 border-[#929291] bg-[#272822]",
          "px-4 py-3 text-sm font-semibold text-[#71726e]",
          "outline-none placeholder:text-[#71726e]"
        )}
      />

      {/* Action buttons for form submission */}
      <div className="mb-16 flex gap-4">
        <button
          className={cx(
            "flex-1 rounded bg-[#843a17] px-6 py-3",
            "text-sm font-semibold text-[#8c8078]"
          )}
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded bg-[#843a17] px-6 py-3",
            "text-sm font-semibold text-[#8c8078]"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Section header for recent breakdowns list */}
      <h3 className="text-base font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright information */}
      <div className="mt-4 border-t border-gray-300 pt-3 text-center text-sm text-[#b0b0b0]">
        © AutonomyAI
      </div>
    </div>
  );
};
