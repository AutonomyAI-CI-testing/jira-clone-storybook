import { useState } from "react";
import cx from "classix";

// Color constants
const COLORS = {
  headerText: "#b5b5b5",
  iconGray: "#929291",
  collapseIcon: "#8b9291",
  collapseText: "#8b9291",
  descriptionText: "#737470",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  inputBg: "#272822",
  inputBorder: "#929291",
  inputPlaceholder: "#737470",
  label: "#a4a4a3",
  recentText: "#b0b0b0",
  footerText: "#737470",
  addNewButtonText: "#b2b2b1",
};

// Reusable settings icon (gear icon in header)
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: COLORS.iconGray }}
  >
    <path
      d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z"
      fill="currentColor"
    />
    <path
      d="M8 1C8.55228 1 9 0.552285 9 0C9 -0.552285 8.55228 -1 8 -1C7.44772 -1 7 -0.552285 7 0C7 0.552285 7.44772 1 8 1Z"
      fill="currentColor"
    />
    <path
      d="M8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17Z"
      fill="currentColor"
    />
    <path
      d="M16 8C16.5523 8 17 7.55228 17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8Z"
      fill="currentColor"
    />
    <path
      d="M1 8C1.55228 8 2 7.55228 2 7C2 6.44772 1.55228 6 1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8Z"
      fill="currentColor"
    />
  </svg>
);

// Reusable chevron icon (used in collapsible sections)
const ChevronIcon = ({ isRotated }: { isRotated: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={cx(
      "flex-shrink-0 transition-transform",
      isRotated && "rotate-180"
    )}
    style={{ color: "#8b9291" }}
  >
    <path
      d="M1 9L6 4L11 9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Reusable chevron icon for "Add New Design" (points down by default)
const DownChevronIcon = ({ isRotated }: { isRotated: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={cx(
      "flex-shrink-0 transition-transform",
      isRotated && "rotate-180"
    )}
    style={{ color: COLORS.addNewButtonText }}
  >
    <path
      d="M1 3L6 8L11 3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Reusable info icon (shown next to form labels)
const InfoIcon = ({ title }: { title: string }) => (
  <span
    className="flex h-4 w-4 items-center justify-center rounded-full"
    title={title}
    style={{ color: COLORS.iconGray }}
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5" fill="currentColor" />
      <text
        x="6"
        y="7"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="white"
      >
        i
      </text>
    </svg>
  </span>
);

// Collapsible section component
const CollapsibleSection = ({
  title,
  isCollapsed,
  onToggle,
  children,
  hasDownChevron = false,
}: {
  title: string;
  isCollapsed: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
  hasDownChevron?: boolean;
}) => (
  <div className={hasDownChevron ? "mb-6" : "mb-5"}>
    <button
      onClick={onToggle}
      className="hover:bg-gray-900 flex w-full items-center gap-2 rounded px-3 py-2"
    >
      {hasDownChevron ? (
        <DownChevronIcon isRotated={isCollapsed} />
      ) : (
        <ChevronIcon isRotated={isCollapsed} />
      )}
      <span
        className={
          hasDownChevron ? "font-primary-bold text-sm" : "font-primary text-xs"
        }
        style={{
          color: hasDownChevron ? COLORS.addNewButtonText : COLORS.collapseText,
        }}
      >
        {title}
      </span>
    </button>
    {!isCollapsed && children}
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameCollapsed, setIsFrameCollapsed] = useState<boolean>(true);
  const [isAddDesignCollapsed, setIsAddDesignCollapsed] =
    useState<boolean>(false);

  return (
    <div className="w-96 rounded-lg bg-black p-5">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="font-primary-bold text-sm"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <button
          className="hover:bg-gray-800 flex h-5 w-5 items-center justify-center rounded"
          title="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible section: design-to-component conversion info */}
      <CollapsibleSection
        title="From entire frame to a single component"
        isCollapsed={isFrameCollapsed}
        onToggle={() => setIsFrameCollapsed(!isFrameCollapsed)}
      >
        <div
          className="px-3 py-2 text-xs"
          style={{ color: COLORS.descriptionText }}
        >
          <p className="truncate">
            Convert your Figma designs into React components seamlessly...
          </p>
        </div>
      </CollapsibleSection>

      {/* Collapsible section: form to add new design */}
      <CollapsibleSection
        title="Add New Design"
        isCollapsed={isAddDesignCollapsed}
        onToggle={() => setIsAddDesignCollapsed(!isAddDesignCollapsed)}
        hasDownChevron
      >
        <div className="space-y-3 px-3 py-3">
          {/* Personal Access Token Input */}
          <div>
            <label
              className="mb-1.5 flex items-center gap-1 font-primary-bold text-xs"
              style={{ color: COLORS.label }}
            >
              Personal Access Token
              <InfoIcon title="Your Figma personal access token for authentication" />
            </label>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border px-2.5 py-1.5 text-xs outline-none transition"
              style={{
                backgroundColor: COLORS.inputBg,
                borderColor: COLORS.inputBorder,
                color: COLORS.inputPlaceholder,
              }}
            />
          </div>

          {/* Design URL Input */}
          <div>
            <label
              className="mb-1.5 flex items-center gap-1 font-primary-bold text-xs"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
              <InfoIcon title="The URL of your Figma design file" />
            </label>
            <input
              type="url"
              placeholder="https://www.figma.com/file/:"
              className="w-full border px-2.5 py-1.5 text-xs outline-none transition"
              style={{
                backgroundColor: COLORS.inputBg,
                borderColor: "#a5adad",
                color: "#71726e",
              }}
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button
          className="flex-1 rounded px-3 py-2 font-primary-bold text-xs transition"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-3 py-2 font-primary-bold text-xs transition"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="px-3 py-2.5">
        <h3
          className="font-primary-bold text-sm"
          style={{ color: COLORS.recentText }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs" style={{ color: COLORS.footerText }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
