import { useState } from "react";
import cx from "classix";

// Color palette for UI Magician Agent card
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  sectionText: "#b2b2b1",
  buttonBg: "#843A17",
  buttonText: "#8c8078",
  inputBg: "#1a1a1a",
  inputBorder: "#505050",
  inputText: "#737470",
  labelText: "#a4a4a3",
  placeholderText: "#71726e",
  footerText: "#b0b0b0",
};

export const TestCard = (): JSX.Element => {
  const [isCollapsedFirstSection, setIsCollapsedFirstSection] = useState(false);
  const [isCollapsedAddDesign, setIsCollapsedAddDesign] = useState(false);

  return (
    <div
      className="w-full max-w-xs p-5 font-primary-bold"
      style={{ backgroundColor: COLORS.background }}
      role="main"
      aria-label="UI Magician Agent Panel"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px]" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      <div className="mb-12">
        <button
          onClick={() => setIsCollapsedFirstSection(!isCollapsedFirstSection)}
          className="mb-3 flex items-center gap-2 text-[11.5px] hover:opacity-80"
          style={{ color: "#8b9291" }}
          aria-expanded={!isCollapsedFirstSection}
          aria-controls="collapsible-section-1"
        >
          <ChevronIcon
            isCollapsed={isCollapsedFirstSection}
            className="h-4 w-4"
          />
          <span>From entire frame to a singl...</span>
        </button>
      </div>

      <div className="mb-8">
        <button
          onClick={() => setIsCollapsedAddDesign(!isCollapsedAddDesign)}
          className="mb-5 flex items-center gap-2 text-[13.5px] hover:opacity-80"
          style={{ color: COLORS.sectionText }}
          aria-expanded={!isCollapsedAddDesign}
          aria-controls="add-design-section"
        >
          <ChevronIcon isCollapsed={isCollapsedAddDesign} className="h-5 w-5" />
          <span>Add New Design</span>
        </button>

        {!isCollapsedAddDesign && (
          <div className="space-y-5" id="add-design-section">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  className="text-[11.5px]"
                  style={{ color: COLORS.labelText }}
                >
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                value="figd_xxxxxxxxxxxxxxxxx"
                readOnly
                aria-label="Personal Access Token (read-only)"
                className="w-full border px-3 py-2 text-[11.5px] outline-none"
                style={{
                  borderColor: COLORS.inputBorder,
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.inputText,
                }}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[11.5px]" style={{ color: "#a3a3a2" }}>
                  Design URL
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                defaultValue="https://www.figma.com/file/:"
                aria-label="Design URL"
                className="w-full border px-3 py-2 text-[10.5px] outline-none"
                style={{
                  borderColor: COLORS.inputBorder,
                  backgroundColor: COLORS.inputBg,
                  color: COLORS.placeholderText,
                }}
              />
            </div>

            <div className="flex gap-3 pt-3">
              <button
                className="flex-1 rounded border px-4 py-2 font-primary-bold text-[11.5px] hover:opacity-90"
                style={{
                  borderColor: COLORS.buttonBg,
                  backgroundColor: COLORS.buttonBg,
                  color: COLORS.buttonText,
                }}
              >
                Awesome
              </button>
              <button
                className="flex-1 rounded border px-4 py-2 font-primary-bold text-[11.5px] hover:opacity-90"
                style={{
                  borderColor: COLORS.buttonBg,
                  backgroundColor: COLORS.buttonBg,
                  color: COLORS.buttonText,
                }}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t pt-3" style={{ borderColor: "#4a4a4a" }}>
        <p
          className="text-center text-[11.5px]"
          style={{ color: COLORS.footerText }}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

// Chevron icon with rotation animation - rotates 180 degrees when collapsed
const ChevronIcon = ({
  isCollapsed,
  className = "",
}: {
  isCollapsed: boolean;
  className?: string;
}): JSX.Element => (
  <svg
    className={cx(
      className,
      "transition-transform duration-200",
      isCollapsed && "rotate-180"
    )}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// Settings icon in header
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.headerText }}
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={3} />
    <path d="M12 1v6m0 6v6" />
    <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24" />
    <path d="M1 12h6m6 0h6" />
    <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
    <circle cx={12} cy={3} r={0.5} />
    <circle cx={3} cy={12} r={0.5} />
    <circle cx={12} cy={21} r={0.5} />
    <circle cx={21} cy={12} r={0.5} />
  </svg>
);

// Information icon next to input labels
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "#8a8a88" }}
    aria-hidden="true"
  >
    <circle cx={12} cy={12} r={10} />
    <line x1={12} y1={16} x2={12} y2={12} />
    <line x1={12} y1={8} x2={12.01} y2={8} />
  </svg>
);
