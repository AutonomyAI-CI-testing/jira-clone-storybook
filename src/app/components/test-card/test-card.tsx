import { useState } from "react";
import cx from "classix";

const SettingsIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <circle cx="9" cy="9" r="2.5" />
    <circle cx="9" cy="2.5" r="1.2" />
    <circle cx="14.5" cy="4.5" r="1.2" />
    <circle cx="15.5" cy="9" r="1.2" />
    <circle cx="14.5" cy="13.5" r="1.2" />
    <circle cx="9" cy="15.5" r="1.2" />
    <circle cx="3.5" cy="13.5" r="1.2" />
    <circle cx="2.5" cy="9" r="1.2" />
    <circle cx="3.5" cy="4.5" r="1.2" />
  </svg>
);

const CollapseToggleIcon = ({
  isExpanded,
}: {
  isExpanded: boolean;
}): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    className={cx("transition-transform", isExpanded ? "rotate-180" : "")}
    aria-hidden="true"
  >
    <path
      d="M11 7L6 2L1 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    style={{ color }}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 4.5V11" strokeLinecap="round" />
    <circle cx="7.5" cy="3.5" r="0.5" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  const [isFrameCollapsed, setIsFrameCollapsed] = useState(true);
  const [isDesignCollapsed, setIsDesignCollapsed] = useState(false);
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const toggleFrame = () => setIsFrameCollapsed(!isFrameCollapsed);
  const toggleDesign = () => setIsDesignCollapsed(!isDesignCollapsed);

  return (
    <div className="min-h-screen w-[254px] bg-black p-5">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* From entire frame section */}
      <div className="mb-16">
        <button
          onClick={toggleFrame}
          className="flex items-center gap-2 text-sm font-semibold text-[#8b9291] hover:text-[#a3a3a2]"
          aria-expanded={!isFrameCollapsed}
          aria-label="Toggle frame collapse"
        >
          <CollapseToggleIcon isExpanded={!isFrameCollapsed} />
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design section */}
      <div className="mb-16">
        <button
          onClick={toggleDesign}
          className="flex items-center gap-2 text-sm font-semibold text-[#b2b2b1] hover:text-[#c3c3c2]"
          aria-expanded={!isDesignCollapsed}
          aria-label="Toggle add new design form"
        >
          <CollapseToggleIcon isExpanded={!isDesignCollapsed} />
          Add New Design
        </button>
      </div>

      {/* Form Inputs Section - Shown when design form is expanded */}
      {!isDesignCollapsed && (
        <div className="space-y-8">
          {/* Personal Access Token Input */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <label
                htmlFor="token-input"
                className="text-sm font-semibold text-[#a4a4a3]"
              >
                Personal Access Token
              </label>
              <InfoIcon color="#a4a4a3" />
            </div>
            <input
              id="token-input"
              type="text"
              value={tokenValue}
              onChange={(e) => setTokenValue(e.target.value)}
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border border-[#929291] bg-[#1a1a1a] px-4 py-3 text-xs font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
              aria-label="Personal Access Token input"
            />
          </div>

          {/* Design URL Input */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <label
                htmlFor="url-input"
                className="text-sm font-semibold text-[#a3a3a2]"
              >
                Design URL
              </label>
              <InfoIcon color="#a3a3a2" />
            </div>
            <input
              id="url-input"
              type="text"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-[#a5adad] bg-[#1a1a1a] px-4 py-3 text-xs font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
              aria-label="Design URL input"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="flex-1 rounded bg-[#a85f3c] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#b87149] active:bg-[#953d2a]">
              Awesome
            </button>
            <button className="flex-1 rounded bg-[#a85f3c] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#b87149] active:bg-[#953d2a]">
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns Section */}
      <div className="mt-24">
        <h2 className="text-lg font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-3 text-center text-sm text-font-subtlest">
        © AutonomyAI
      </div>
    </div>
  );
};
