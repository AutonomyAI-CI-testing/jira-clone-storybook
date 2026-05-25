import { useState } from "react";

// Collapsible chevron icon (right-pointing when collapsed, down-pointing when expanded)
const ChevronIcon = ({ isCollapsed }: { isCollapsed: boolean }): JSX.Element => {
  const pathData = isCollapsed
    ? "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z";

  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4">
      <path fillRule="evenodd" d={pathData} clipRule="evenodd" />
    </svg>
  );
};

// Info icon for form field help buttons
const InfoIcon = (): JSX.Element => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

// Settings gear icon
const SettingsIcon = (): JSX.Element => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.26 2.37 1.805a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.26 3.31-1.805 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.26-2.37-1.805a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.26-3.31 1.805-2.37a1.724 1.724 0 002.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAddNewDesignExpanded, setIsAddNewDesignExpanded] = useState(true);

  return (
    <div className="w-full max-w-md bg-black p-5 text-font">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-300"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible design system section */}
      <button
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mb-5 flex w-full items-center gap-2 text-xs font-semibold text-[#8b9291] hover:text-[#a3a3a2]"
        aria-expanded={!isCollapsed}
      >
        <span className="inline-block h-4 w-4">
          <ChevronIcon isCollapsed={isCollapsed} />
        </span>
        {isCollapsed ? "From entire frame to a singl..." : "From entire frame to a single design token"}
      </button>

      {/* Collapsible content */}
      {!isCollapsed && (
        <div className="mb-5 border-l-2 border-gray-600 pl-4 text-xs text-[#737470]">
          <p>Design system content would appear here</p>
        </div>
      )}

      {/* Add New Design section header */}
      <button
        type="button"
        onClick={() => setIsAddNewDesignExpanded(!isAddNewDesignExpanded)}
        className="mb-5 flex w-full items-center gap-2 text-xs font-semibold text-[#b2b2b1] hover:text-[#c5c5c4]"
        aria-expanded={isAddNewDesignExpanded}
      >
        <span className="inline-block h-4 w-4">
          <ChevronIcon isCollapsed={!isAddNewDesignExpanded} />
        </span>
        Add New Design
      </button>

      {/* Form inputs */}
      {isAddNewDesignExpanded && (
        <div className="mb-5 space-y-4">
          {/* Personal Access Token field */}
          <div>
             <div className="mb-2 flex items-center gap-1">
              <label
                htmlFor="pat"
                className="text-xs font-semibold text-[#a4a4a3]"
              >
                Personal Access Token
              </label>
              <button
                type="button"
                className="text-[#737470] hover:text-[#8b9291]"
                aria-label="Info about Personal Access Token"
              >
                <InfoIcon />
              </button>
            </div>
            <input
              id="pat"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder-[#737470] focus:border-[#a5adad] focus:outline-none"
            />
          </div>

          {/* Design URL field */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label
                htmlFor="design-url"
                className="text-xs font-semibold text-[#a3a3a2]"
              >
                Design URL
              </label>
              <button
                type="button"
                className="text-[#737470] hover:text-[#8b9291]"
                aria-label="Info about Design URL"
              >
                <InfoIcon />
              </button>
            </div>
            <input
              id="design-url"
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e] focus:border-[#b5b5b5] focus:outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-[#8c8078] hover:bg-[#a04e1f] active:bg-[#6b2f13]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded bg-[#843a17] px-3 py-2 text-xs font-semibold text-[#8c8078] hover:bg-[#a04e1f] active:bg-[#6b2f13]"
            >
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns section header */}
      <div className="border-t border-gray-700 pt-5">
        <h2 className="text-xs font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-[#737470]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
