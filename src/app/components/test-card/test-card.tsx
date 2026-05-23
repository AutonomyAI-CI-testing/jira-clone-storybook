import { useState } from "react";
import cx from "classix";
import { FaChevronUp } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

// Button color constants
const BUTTON_BG_COLOR = "#8b4513";
const BUTTON_BG_HOVER_COLOR = "#9c5a1a";
const BUTTON_BORDER_RADIUS = "6px";

/**
 * Action button with hover state styling.
 * Uses inline styles to maintain the design-system color palette.
 */
interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ActionButton = ({ onClick, children }: ActionButtonProps) => (
  <button
    onClick={onClick}
    className="flex-1 px-4 py-2.5 text-[12px] font-semibold text-[#e8dcd0] transition-colors"
    style={{
      backgroundColor: BUTTON_BG_COLOR,
      borderRadius: BUTTON_BORDER_RADIUS,
    }}
    onMouseOver={(e) => {
      (e.target as HTMLButtonElement).style.backgroundColor =
        BUTTON_BG_HOVER_COLOR;
    }}
    onMouseOut={(e) => {
      (e.target as HTMLButtonElement).style.backgroundColor = BUTTON_BG_COLOR;
    }}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  // Section collapse state for expandable/collapsible UI sections
  const [isCollapsedSection1, setIsCollapsedSection1] = useState(false);
  const [isCollapsedAddNewDesign, setIsCollapsedAddNewDesign] =
    useState(false);

  // Form field state for the "Add New Design" section
  const [personalAccessToken, setPersonalAccessToken] = useState(
    "figd_xxxxxxxxxxxxxxxxxx"
  );
  const [designUrl, setDesignUrl] = useState(
    "https://www.figma.com/file/:"
  );

  return (
    <div className="w-full max-w-[320px] bg-black">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-[#272822] px-5 py-6">
        <h1 className="text-[20px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center text-[#b5b5b5] hover:text-[#c5c5c5]"
          aria-label="Settings"
        >
          <IoMdSettings size={20} />
        </button>
      </div>

      {/* Collapsible Section 1: Frame conversion step (collapsed by default) */}
      <div className="border-b border-[#272822] bg-[#0a0a0a] px-5 py-5">
        <button
          onClick={() => setIsCollapsedSection1(!isCollapsedSection1)}
          className="flex items-center gap-3 text-[11.5px] font-semibold text-[#8b9291] hover:text-[#9ba2a1]"
        >
          <FaChevronUp
            size={12}
            className={cx(
              "transition-transform",
              isCollapsedSection1 && "rotate-180"
            )}
          />
          From entire frame to a singl...
        </button>
      </div>

      {/* Add New Design Section: Collapsible form with token and URL inputs (collapsed by default) */}
      <div className="border-b border-[#272822] bg-[#0a0a0a] px-5 py-7">
        <button
          onClick={() => setIsCollapsedAddNewDesign(!isCollapsedAddNewDesign)}
          className="mb-6 flex items-center gap-3 text-[13.5px] font-semibold text-[#b2b2b1] hover:text-[#c2c2c1]"
        >
          <FaChevronUp
            size={16}
            className={cx(
              "transition-transform",
              isCollapsedAddNewDesign && "rotate-180"
            )}
          />
          Add New Design
        </button>

        {!isCollapsedAddNewDesign && (
          <div className="space-y-5">
            {/* Personal Access Token Field */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-[#a4a4a3]">
                <span>Personal Access Token</span>
                {/* Info icon badge for visual affordance (accessible via screen reader through label) */}
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#a4a4a3] text-[10px] text-[#a4a4a3]">
                  i
                </span>
              </label>
              <input
                type="text"
                value={personalAccessToken}
                onChange={(e) => setPersonalAccessToken(e.target.value)}
                className="w-full bg-[#272822] px-3 py-2.5 text-[12px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
                style={{ border: "1.5px solid #929291" }}
              />
            </div>

            {/* Design URL Field */}
            <div>
              <label className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-[#a3a3a2]">
                <span>Design URL</span>
                {/* Info icon badge for visual affordance (accessible via screen reader through label) */}
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#a3a3a2] text-[10px] text-[#a3a3a2]">
                  i
                </span>
              </label>
              <input
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                className="w-full bg-[#272822] px-3 py-2.5 text-[12px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
                style={{ border: "1.5px solid #a5adad" }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-3">
              <ActionButton>Awesome</ActionButton>
              <ActionButton>Prepare</ActionButton>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="px-5 py-7">
        <h3 className="text-[17px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 px-5 pt-3 text-center">
        <p className="text-[12px] font-semibold text-[#b5b5b5]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
