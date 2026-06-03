// Small dark-themed card for design/token input UI
const InfoIcon = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.8" />
    <text
      x="6"
      y="7.5"
      textAnchor="middle"
      fontSize="8"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

const InfoButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="text-[#a3a3a2] hover:text-[#b5b5b5]"
    aria-label={label}
  >
    <InfoIcon />
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 bg-black p-4 text-[#b5b5b5]"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold tracking-tight">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-[#b5b5b5] hover:text-[#d0d0d0]"
          aria-label="Settings"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8"
              cy="8"
              r="1.5"
              fill="currentColor"
              opacity="0.8"
            />
            <circle
              cx="8"
              cy="3"
              r="1.5"
              fill="currentColor"
              opacity="0.6"
            />
            <circle
              cx="8"
              cy="13"
              r="1.5"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </button>
      </div>

      {/* Collapsible Section Hint */}
      <div className="mb-6 flex items-center justify-between rounded bg-[#1a1a1a] p-3">
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-[#8b9291]"
        >
          <path
            d="M3 5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-[#b0b0b0]"
        >
          <path
            d="M5.5 2l3.5 3.5L5.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1.5">
          <label
            htmlFor="token"
            className="text-[10.5px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoButton label="Info" />
        </div>
        <input
          id="token"
          type="password"
          placeholder="••••••••••••••••"
          className="w-full rounded border border-[#3a3a3a] bg-[#0a0a0a] px-2.5 py-2 text-[11px] text-[#b5b5b5] placeholder-[#737470] focus:border-[#4a4a4a] focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1.5">
          <label
            htmlFor="url"
            className="text-[10.5px] font-semibold text-[#a4a4a3]"
          >
            Design URL
          </label>
          <InfoButton label="Info" />
        </div>
        <input
          id="url"
          type="url"
          placeholder="https://figma.com/file/..."
          className="w-full rounded border border-[#3a3a3a] bg-[#0a0a0a] px-2.5 py-2 text-[11px] text-[#b5b5b5] placeholder-[#71726e] focus:border-[#4a4a4a] focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#a0583a] px-3 py-2 text-center text-[11px] font-semibold text-[#8c8078] hover:bg-[#b56a45] active:bg-[#8f4a2f]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#a0583a] px-3 py-2 text-center text-[11px] font-semibold text-[#8c8078] hover:bg-[#b56a45] active:bg-[#8f4a2f]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="border-t border-[#2a2a2a] pt-4">
        <h3 className="text-[11px] font-semibold text-[#a4a4a3]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
