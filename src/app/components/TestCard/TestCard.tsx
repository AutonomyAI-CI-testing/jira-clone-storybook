import { useState } from "react";
import { cx } from "classix";

// Info icon button used in form labels
const InfoIcon = () => (
  <button className="text-[#b5b5b5] hover:opacity-80">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-label="More information"
    >
      <circle cx="8" cy="8" r="7" />
      <text
        x="8"
        y="10"
        textAnchor="middle"
        fontSize="10"
        fill="black"
        fontWeight="bold"
      >
        i
      </text>
    </svg>
  </button>
);

export const TestCard = () => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Options menu button in header
  const renderOptionsMenu = () => (
    <button className="text-[#b5b5b5] hover:opacity-80" aria-label="More options">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="19" r="1" />
        <circle cx="12" cy="5" r="1" />
        <path d="M12 9v6" strokeLinecap="round" />
        <path d="M9 12h6" strokeLinecap="round" />
      </svg>
    </button>
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-[254px] bg-black">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-[13.5px] font-bold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          {renderOptionsMenu()}
        </div>

        {/* Collapsible Section */}
        <div className="flex items-start gap-2 pb-8">
          <button
            onClick={() => setIsCollapsibleOpen(!isCollapsibleOpen)}
            className={cx(
              "mt-0.5 flex-shrink-0 text-[#b2b2b1] transition-transform",
              isCollapsibleOpen && "rotate-180"
            )}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-label={isCollapsibleOpen ? "Collapse" : "Expand"}
            >
              <polyline points="3 6 6 9 9 6" />
            </svg>
          </button>
          <span className="text-[11.5px] font-bold text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design Section */}
        <div className="flex items-center gap-2 pb-8">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className={cx(
              "flex-shrink-0 text-[#b2b2b1] transition-transform",
              isFormOpen && "rotate-180"
            )}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-label={isFormOpen ? "Collapse form" : "Expand form"}
            >
              <polyline points="4 8 8 12 12 8" />
            </svg>
          </button>
          <h2 className="text-[13.5px] font-bold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Form Section */}
        {isFormOpen && (
          <>
            {/* Personal Access Token */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <label className="text-[11.5px] font-bold text-[#a4a4a3]">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border border-[#404040] bg-[#1a1a1a] px-3 py-2 text-[11.5px] font-bold text-[#737470] placeholder-[#737470]"
              />
            </div>

            {/* Design URL */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <label className="text-[11.5px] font-bold text-[#a3a3a2]">
                  Design URL
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border border-[#404040] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-bold text-[#71726e] placeholder-[#71726e]"
              />
            </div>

            {/* Action Buttons */}
            <div className="mb-12 flex gap-3">
              <button className="flex-1 rounded-lg bg-[#b67049] px-6 py-2 text-[11.5px] font-bold text-white hover:bg-[#a85f3d]">
                Awesome
              </button>
              <button className="flex-1 rounded-lg bg-[#b67049] px-6 py-2 text-[11.5px] font-bold text-white hover:bg-[#a85f3d]">
                Prepare
              </button>
            </div>
          </>
        )}

        {/* Recent Breakdowns Section */}
        <div className="text-[13.5px] font-bold text-[#b0b0b0]">
          Recent Breakdowns
        </div>

        {/* Footer Section */}
        <div className="border-t border-[#d1d5db] pt-3 text-center text-[11.5px] text-[#737470]">
          © AutonomyAI
        </div>
      </div>
    </div>
  );
};
