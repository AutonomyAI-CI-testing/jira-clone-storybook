import { useState } from "react";
import cx from "classix";
import SettingsIcon from "./settings-icon.svg";
import InfoIcon from "./info-icon.svg";

// Color palette for the dark-themed card
const COLORS = {
  headerText: "#b5b5b5",
  frameButtonText: "#8b9291",
  designButtonText: "#b2b2b1",
  tokenLabel: "#a4a4a3",
  urlLabel: "#a3a3a2",
  recentBreakdownsText: "#b0b0b0",
} as const;

const INPUT_STYLES = {
  shared: "border px-3 py-2",
  token: {
    backgroundColor: "#272822",
    borderColor: "#a5adad",
    color: "#737470",
  },
  url: {
    backgroundColor: "#272822",
    borderColor: "#929291",
    color: "#71726e",
  },
} as const;

const ACTION_BUTTON_STYLES = {
  backgroundColor: "#843a17",
  color: "#8c8078",
} as const;

// Arrow icon dimensions (in pixels)
const ARROW_ICON_SIZE = { width: "12px", height: "8px" } as const;

interface CollapsibleButtonProps {
  isCollapsed: boolean;
  onToggle: () => void;
  label: string;
  color: string;
}

/**
 * CollapsibleButton: Renders a collapsible section header with a rotating arrow.
 * The arrow points down when expanded and up when collapsed.
 */
function CollapsibleButton({
  isCollapsed,
  onToggle,
  label,
  color,
}: CollapsibleButtonProps): JSX.Element {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-2 text-left"
      style={{ color }}
    >
      <span
        className={cx(
          "inline-block transition-transform",
          // Arrow rotates 180° when expanded (isCollapsed = false)
          !isCollapsed && "rotate-180"
        )}
        style={ARROW_ICON_SIZE}
      >
        ▲
      </span>
      <span className="font-semibold">{label}</span>
    </button>
  );
}

export const TestCard = (): JSX.Element => {
  const [isFrameCollapsed, setIsFrameCollapsed] = useState(false);
  const [isDesignCollapsed, setIsDesignCollapsed] = useState(false);

  return (
    <div
      id="testElem"
      className="flex flex-col gap-4 bg-black p-5 font-primary text-sm"
      style={{ width: "254px" }}
    >
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1
          className="text-base font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <img
          src={SettingsIcon}
          alt="Settings"
          className="h-4 w-4"
        />
      </div>

      {/* Collapsible "From entire frame" section */}
      <CollapsibleButton
        isCollapsed={isFrameCollapsed}
        onToggle={() => setIsFrameCollapsed(!isFrameCollapsed)}
        label="From entire frame to a singl..."
        color={COLORS.frameButtonText}
      />

      {/* Collapsible "Add New Design" section */}
      <CollapsibleButton
        isCollapsed={isDesignCollapsed}
        onToggle={() => setIsDesignCollapsed(!isDesignCollapsed)}
        label="Add New Design"
        color={COLORS.designButtonText}
      />

      {/* Form inputs - shown when Add New Design is expanded */}
      {!isDesignCollapsed && (
        <>
          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label
                className="font-semibold"
                style={{ color: COLORS.tokenLabel }}
              >
                Personal Access Token
              </label>
              <img
                src={InfoIcon}
                alt="Info"
                className="h-4 w-4"
              />
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={INPUT_STYLES.shared}
              style={INPUT_STYLES.token}
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label
                className="font-semibold"
                style={{ color: COLORS.urlLabel }}
              >
                Design URL
              </label>
              <img
                src={InfoIcon}
                alt="Info"
                className="h-4 w-4"
              />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={INPUT_STYLES.shared}
              style={INPUT_STYLES.url}
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 py-2 font-semibold rounded"
              style={ACTION_BUTTON_STYLES}
            >
              Awesome
            </button>
            <button
              className="flex-1 py-2 font-semibold rounded"
              style={ACTION_BUTTON_STYLES}
            >
              Prepare
            </button>
          </div>
        </>
      )}

      {/* Recent Breakdowns section */}
      <div className="mt-4">
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
