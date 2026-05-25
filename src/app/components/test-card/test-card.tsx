import { useState } from "react";
import cx from "classix";

// Default form values for token and URL inputs
const DEFAULT_TOKEN = "figd_xxxxxxxxxxxxxxxxxx";
const DEFAULT_URL = "https://www.figma.com/file/:";

// Button styling for action buttons (Awesome, Prepare)
const ACTION_BUTTON_STYLES = [
  "flex-1 rounded-md px-4 py-2.5 text-center text-[11.5px] font-semibold",
  "bg-[#a67c52] text-[#8c8078]",
  "hover:bg-[#b88d62] active:bg-[#956943]",
  "transition-colors",
];

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState<boolean>(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState<boolean>(true);
  const [token, setToken] = useState<string>(DEFAULT_TOKEN);
  const [url, setUrl] = useState<string>(DEFAULT_URL);

  return (
    <div className="w-full max-w-xs bg-black p-5 text-font-subtlest">
      {/* Header with title and settings button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings button (currently non-functional) */}
        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-700 text-gray-600 hover:text-gray-400" aria-label="Settings">
          ⚙️
        </button>
      </div>

      {/* Collapsible section for frame-related actions */}
      <div className="mb-8 space-y-3">
        <button
          onClick={() => setIsFrameExpanded(!isFrameExpanded)}
          className="flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291] hover:text-gray-300"
          aria-expanded={isFrameExpanded}
        >
          <span className="inline-block w-4 text-center" aria-hidden="true">
            {isFrameExpanded ? "▲" : "▼"}
          </span>
          From entire frame to a singl...
        </button>
        {isFrameExpanded && (
          <div className="ml-6 text-[11px] text-gray-500">
            {/* Placeholder for expandable frame content */}
          </div>
        )}
      </div>

      {/* Collapsible form section for adding a new design */}
      <div className="mb-8 space-y-4">
        <button
          onClick={() => setIsDesignExpanded(!isDesignExpanded)}
          className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1] hover:text-gray-300"
          aria-expanded={isDesignExpanded}
        >
          <span className="inline-block w-4 text-center" aria-hidden="true">
            {isDesignExpanded ? "▲" : "▼"}
          </span>
          Add New Design
        </button>

        {isDesignExpanded && (
          <div className="space-y-4">
            {/* Personal Access Token field */}
            <div className="space-y-2">
              <label htmlFor="token-input" className="flex items-center gap-2 text-[11.5px] font-semibold text-[#a4a4a3]">
                Personal Access Token
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-500 hover:text-gray-300" title="A personal access token from Figma for API authentication">
                  i
                </span>
              </label>
              <input
                id="token-input"
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder={DEFAULT_TOKEN}
                className={cx(
                  "w-full rounded border border-gray-700 bg-[#1a1a1a] px-3 py-2",
                  "text-[10.5px] font-mono text-[#737470] placeholder-gray-600",
                  "focus-visible:border-blue-500 focus-visible:outline-none",
                  "hover:border-gray-600"
                )}
              />
            </div>

            {/* Design URL field */}
            <div className="space-y-2">
              <label htmlFor="url-input" className="flex items-center gap-2 text-[11.5px] font-semibold text-[#a3a3a2]">
                Design URL
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-500 hover:text-gray-300" title="The URL of the Figma design file">
                  i
                </span>
              </label>
              <input
                id="url-input"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={DEFAULT_URL}
                className={cx(
                  "w-full rounded border border-gray-700 bg-[#1a1a1a] px-3 py-2",
                  "text-[10.5px] font-mono text-[#71726e] placeholder-gray-600",
                  "focus-visible:border-blue-500 focus-visible:outline-none",
                  "hover:border-gray-600"
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <button className={cx(...ACTION_BUTTON_STYLES)}>
                Awesome
              </button>
              <button className={cx(...ACTION_BUTTON_STYLES)}>
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns section (placeholder for future content) */}
      <div className="mt-12">
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright info */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11px] text-gray-500">© AutonomyAI</p>
      </div>
    </div>
  );
};
