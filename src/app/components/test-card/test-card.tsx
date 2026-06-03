import { useState } from "react";

// SVG icon components for consistent rendering and reduced duplication
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8c8078]"
  >
    <path
      d="M8 1v2.5M8 12.5V15M2.5 8H1M15 8h-2.5M3.5 3.5l1.77 1.77M10.73 10.73l1.77 1.77M3.5 12.5l1.77-1.77M10.73 5.27l1.77-1.77"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform ${
      isExpanded ? "rotate-180" : ""
    }`}
  >
    <path
      d="M12 6L8 10L4 6"
      stroke="#8c8078"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="6.5" stroke="#8c8078" strokeWidth="1" />
    <text
      x="7"
      y="9"
      textAnchor="middle"
      fontSize="10"
      fill="#8c8078"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="min-h-screen bg-black p-6"
    >
      <div className="w-full max-w-xl rounded-lg bg-black p-6 text-sm">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center hover:opacity-80"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        <div className="mb-6">
          <button
            type="button"
            onClick={() => setIsHeaderExpanded(!isHeaderExpanded)}
            className="flex w-full items-center justify-between hover:opacity-80"
          >
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              From entire frame to a singl...
            </span>
            <ChevronIcon isExpanded={isHeaderExpanded} />
          </button>
        </div>

        <div className="mb-6">
          <button
            type="button"
            onClick={() => setIsDesignExpanded(!isDesignExpanded)}
            className="mb-4 flex w-full items-center justify-between hover:opacity-80"
          >
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
            <ChevronIcon isExpanded={isDesignExpanded} />
          </button>

          {isDesignExpanded && (
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="token"
                    className="text-[11.5px] font-semibold text-[#a3a3a2]"
                  >
                    Personal Access Token
                  </label>
                  <button
                    type="button"
                    className="flex h-4 w-4 items-center justify-center hover:opacity-80"
                    aria-label="Info about Personal Access Token"
                  >
                    <InfoIcon />
                  </button>
                </div>
                <input
                  id="token"
                  type="password"
                  placeholder="Enter your token"
                  className="w-full rounded-md border border-[#737470] bg-black px-3 py-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470] focus:outline-none"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="url"
                    className="text-[11.5px] font-semibold text-[#a3a3a2]"
                  >
                    Design URL
                  </label>
                  <button
                    type="button"
                    className="flex h-4 w-4 items-center justify-center hover:opacity-80"
                    aria-label="Info about Design URL"
                  >
                    <InfoIcon />
                  </button>
                </div>
                <input
                  id="url"
                  type="text"
                  placeholder="https://figma.com/..."
                  className="w-full rounded-md border border-[#737470] bg-black px-3 py-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470] focus:outline-none"
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  className="flex-1 rounded-md bg-[#a86644] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] hover:bg-opacity-90 active:bg-opacity-80"
                >
                  Awesome
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md bg-[#a86644] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] hover:bg-opacity-90 active:bg-opacity-80"
                >
                  Prepare
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-[#737470] pt-6">
          <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
