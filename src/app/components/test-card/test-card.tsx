import { useState } from "react";

// SVG icon representing an atom structure (three orbiting ellipses + center dot)
// Uses currentColor for styling flexibility
const AtomIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(120 12 12)"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  // Track expansion state for collapsible sections
  // Default to expanded (true) to show all content on initial load
  const [isExpandedDescription, setIsExpandedDescription] =
    useState<boolean>(true);
  const [isExpandedAddDesign, setIsExpandedAddDesign] = useState<boolean>(true);
  const [isExpandedRecent, setIsExpandedRecent] = useState<boolean>(true);

  return (
    <div className="flex h-[508px] w-[254px] flex-col bg-black">
      {/* Scrollable content area that grows to fill available space */}
      <div className="flex-1 overflow-y-auto p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <button
            className="flex h-6 w-6 items-center justify-center text-[#b5b5b5] hover:text-[#d0d0d0]"
            aria-label="Settings"
          >
            <AtomIcon />
          </button>
        </div>

        {/* Collapsible section with description of frame-to-design task */}
        <div className="mb-3 border-b border-[#333333]">
          <button
            onClick={() => setIsExpandedDescription(!isExpandedDescription)}
            className="w-full py-2 text-left text-[11.5px] font-semibold text-[#8b9291] hover:text-[#a0a3a2]"
          >
            {/* Collapse indicator: ^ for expanded, v for collapsed */}
            <span className="mr-1 inline-block">
              {isExpandedDescription ? "^" : "v"}
            </span>
            From entire frame to a singl...
          </button>
        </div>

        {/* Collapsible form section for inputting Figma credentials and design URL */}
        <div className="mb-3">
          <button
            onClick={() => setIsExpandedAddDesign(!isExpandedAddDesign)}
            className="mb-2 flex w-full items-center text-[13.5px] font-semibold text-[#b0b0b0] hover:text-[#c0c0c0]"
          >
            {/* Collapse indicator: ^ for expanded, v for collapsed */}
            <span className="mr-2 inline-block">
              {isExpandedAddDesign ? "^" : "v"}
            </span>
            Add New Design
          </button>

          {isExpandedAddDesign && (
            <div className="space-y-3">
              {/* Personal Access Token */}
              <div>
                <label className="mb-1 flex items-center text-[11.5px] font-semibold text-[#a4a4a3]">
                  Personal Access Token
                  <span className="ml-1 inline-block cursor-help text-[#8b9291]">
                    ℹ️
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="figd_xxxxxxxxxxxxxxxxxx"
                  className="w-full border border-[#444444] bg-[#1a1a1a] px-2 py-1.5 text-[11px] font-semibold text-[#737470] placeholder-[#4a4a48] focus:border-[#666666] focus:outline-none"
                />
              </div>

              {/* Design URL */}
              <div>
                <label className="mb-1 flex items-center text-[11.5px] font-semibold text-[#a3a3a2]">
                  Design URL
                  <span className="ml-1 inline-block cursor-help text-[#8b9291]">
                    ℹ️
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="https://www.figma.com/file/:"
                  className="w-full border border-[#444444] bg-[#1a1a1a] px-2 py-1.5 text-[11px] font-semibold text-[#737470] placeholder-[#4a4a48] focus:border-[#666666] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-1">
                <button className="flex-1 border border-[#7a5d4f] bg-[#a0604a] px-3 py-1.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b07055] active:bg-[#904a3f]">
                  Awesome
                </button>
                <button className="flex-1 border border-[#7a5d4f] bg-[#a0604a] px-3 py-1.5 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#b07055] active:bg-[#904a3f]">
                  Prepare
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Collapsible section showing recent breakdowns (empty in demo) */}
        <div>
          <button
            onClick={() => setIsExpandedRecent(!isExpandedRecent)}
            className="flex w-full items-center text-[13.5px] font-semibold text-[#b0b0b0] hover:text-[#c0c0c0]"
          >
            {/* Collapse indicator: ^ for expanded, v for collapsed */}
            <span className="mr-2 inline-block">
              {isExpandedRecent ? "^" : "v"}
            </span>
            Recent Breakdowns
          </button>
        </div>
      </div>

      {/* Fixed footer section at bottom of card */}
      <div className="border-gray-300 border-t py-3 text-center text-[11.5px] font-semibold text-[#737470]">
        © AutonomyAI
      </div>
    </div>
  );
};
