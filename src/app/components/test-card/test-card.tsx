import cx from "classix";

// Color scheme constants for the dark UI
const BG_PRIMARY = "#2b2b2b";
const TEXT_PRIMARY = "#b5b5b5";
const TEXT_SECONDARY = "#8b8b8a";
const TEXT_MUTED = "#a4a4a3";
const BORDER_COLOR = "#4a4a49";
const BORDER_LIGHT = "#6a6a69";
const TEXT_PLACEHOLDER = "#6a6a68";
const TEXT_INPUT = "#7a7a78";
const BUTTON_PRIMARY = "#c46a45";
const BUTTON_TEXT = "#a89080";
const BUTTON_HOVER = "#d47655";
const BORDER_DIVIDER = "gray-300";

// Reusable SVG icon components
const PlusIcon = (): JSX.Element => (
  <svg
    className="h-6 w-6 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12h6M12 9v6" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-[#6b6b6a]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#a4a4a3]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8v.01" />
  </svg>
);

// Reusable button component for consistent styling
interface ActionButtonProps {
  children: string;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    className={cx(
      "flex-1 rounded-lg border-0 px-6 py-3 text-center text-xs font-semibold",
      `bg-[${BUTTON_PRIMARY}] text-[${BUTTON_TEXT}] hover:bg-[${BUTTON_HOVER}]`,
      "transition-colors"
    )}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className={`min-h-screen w-full bg-[${BG_PRIMARY}] p-8`}>
      <div className="mx-auto max-w-xs">
        {/* Header Section: Title with action icon */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className={`text-base font-semibold text-[${TEXT_PRIMARY}]`}>
            UI magician Agent
          </h1>
          <PlusIcon />
        </div>

        {/* Collapsible Section: Expandable task or category */}
        <div className="mb-16 flex items-center gap-4">
          <ChevronUpIcon />
          <p className={`text-xs font-semibold text-[${TEXT_SECONDARY}]`}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design Section: Secondary expandable action */}
        <div className="mb-16 flex items-center gap-4">
          <ChevronUpIcon />
          <h2 className={`text-sm font-semibold text-[${TEXT_PRIMARY}]`}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Input: Read-only field for Figma auth */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <label className={`text-xs font-semibold text-[${TEXT_MUTED}]`}>
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              `w-full border border-[${BORDER_COLOR}] bg-[${BG_PRIMARY}] px-3 py-2 text-xs font-semibold`,
              `text-[${TEXT_INPUT}] placeholder-[${TEXT_PLACEHOLDER}]`,
              `focus:outline-none focus:border-[${BORDER_LIGHT}]`
            )}
            readOnly
          />
        </div>

        {/* Design URL Input: Figma file URL for design generation */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <label className={`text-xs font-semibold text-[${TEXT_MUTED}]`}>
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={cx(
              `w-full border border-[${BORDER_COLOR}] bg-[${BG_PRIMARY}] px-3 py-2 text-xs font-semibold`,
              `text-[${TEXT_INPUT}] placeholder-[${TEXT_PLACEHOLDER}]`,
              `focus:outline-none focus:border-[${BORDER_LIGHT}]`
            )}
          />
        </div>

        {/* Action Buttons: Primary actions for design processing */}
        <div className="mb-16 flex gap-4">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Recent Breakdowns Section: History of processed designs */}
        <div className={`border-t border-${BORDER_DIVIDER} pt-3`}>
          <h3 className={`text-sm font-semibold text-[${TEXT_PRIMARY}]`}>
            Recent Breakdowns
          </h3>
        </div>

        {/* Footer Section: Attribution */}
        <div className={`border-t border-${BORDER_DIVIDER} pt-3 text-center`}>
          <p className={`text-xs text-[${TEXT_PRIMARY}]`}>© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};
