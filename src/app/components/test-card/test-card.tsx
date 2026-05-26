import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import cx from "classix";

// Color palette for the UI Magician Agent card
const COLORS = {
  background: "#2b2b2b",
  cardBg: "#1a1a1a",
  headerText: "#9ca3af",
  iconGray: "#8b9291",
  labelGray: "#a4a4a3",
  inputBorder: "#4a4a4a",
  inputText: "#737470",
  designUrlText: "#71726e",
  sectionTitle: "#b2b2b1",
  footerText: "#b0b0b0",
  copyrightText: "#9ca3af",
  focusOutline: "#4a7ba7",
  buttonBg: "#8b4513",
  buttonText: "#b8a89b",
  buttonHover: "#7a3a10",
  buttonActive: "#6a320d",
} as const;

// Generate input field className with proper color values
const getInputClasses = (textColor: string, placeholderColor: string) =>
  `w-full rounded border border-[${COLORS.inputBorder}] bg-transparent px-3 py-2 text-[10.5px] font-semibold text-[${textColor}] placeholder-[${placeholderColor}] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[${COLORS.focusOutline}]`;

// Button className constant
const BUTTON_CLASSES = cx(
  "flex-1 rounded px-4 py-2.5",
  `bg-[${COLORS.buttonBg}] text-[11.5px] font-semibold text-[${COLORS.buttonText}]`,
  `hover:bg-[${COLORS.buttonHover}] active:bg-[${COLORS.buttonActive}]`,
  `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[${COLORS.focusOutline}]`,
  "transition-colors duration-150"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "flex min-h-screen items-center justify-center p-4",
        `bg-[${COLORS.background}]`
      )}
    >
      <div
        className={cx(
          "w-full max-w-[508px] rounded-lg p-5",
          `bg-[${COLORS.cardBg}]`
        )}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1
            className={cx(
              "text-[13.5px] font-semibold",
              `text-[${COLORS.headerText}]`
            )}
          >
            UI magician Agent
          </h1>
          <FiSettings
            size={20}
            className={`text-[${COLORS.iconGray}]`}
            strokeWidth={1.5}
          />
        </div>

        {/* Collapsible Section 1 */}
        <div className="mb-8 flex items-center gap-3">
          <FiChevronUp
            size={18}
            className={`text-[${COLORS.iconGray}]`}
            strokeWidth={2}
          />
          <span
            className={cx(
              "text-[11.5px] font-semibold",
              `text-[${COLORS.iconGray}]`
            )}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Collapsible Section 2 */}
        <div className="mb-8 flex items-center gap-3">
          <FiChevronUp
            size={18}
            className={`text-[${COLORS.iconGray}]`}
            strokeWidth={2}
          />
          <span
            className={cx(
              "text-[13.5px] font-semibold",
              `text-[${COLORS.sectionTitle}]`
            )}
          >
            Add New Design
          </span>
        </div>

        {/* Form Section */}
        <div className="mb-8 space-y-6">
          {/* Personal Access Token */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                className={cx(
                  "text-[11.5px] font-semibold",
                  `text-[${COLORS.labelGray}]`
                )}
              >
                Personal Access Token
              </label>
              <FiInfo
                size={16}
                className={`text-[${COLORS.iconGray}]`}
                strokeWidth={2}
              />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={getInputClasses(COLORS.inputText, COLORS.inputText)}
              readOnly
            />
          </div>

          {/* Design URL */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                className={cx(
                  "text-[11.5px] font-semibold",
                  `text-[${COLORS.labelGray}]`
                )}
              >
                Design URL
              </label>
              <FiInfo
                size={16}
                className={`text-[${COLORS.iconGray}]`}
                strokeWidth={2}
              />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className={getInputClasses(
                COLORS.designUrlText,
                COLORS.designUrlText
              )}
              readOnly
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-4">
          <button className={BUTTON_CLASSES}>Awesome</button>
          <button className={BUTTON_CLASSES}>Prepare</button>
        </div>

        {/* Footer */}
        <div
          className={cx(
            "text-[13.5px] font-semibold",
            `text-[${COLORS.footerText}]`
          )}
        >
          Recent Breakdowns
        </div>

        {/* Copyright Footer */}
        <div
          className={cx(
            "border-gray-300 border-t pt-3 text-center text-[12px]",
            `text-[${COLORS.copyrightText}]`
          )}
        >
          © AutonomyAI
        </div>
      </div>
    </div>
  );
};
