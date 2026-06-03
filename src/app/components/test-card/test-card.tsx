import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiQuestionMarkCircle,
} from "react-icons/hi2";
import cx from "classix";

// Style constants for consistent theming across the component
const COLORS = {
  text: {
    primary: "text-[#b5b5b5]",
    secondary: "text-[#b2b2b1]",
    tertiary: "text-[#8b9291]",
    label: "text-[#a4a4a3]",
    input: "text-[#737470]",
    inputSecondary: "text-[#71726e]",
    buttonText: "text-[#8c8078]",
    recentBreakdowns: "text-[#b0b0b0]",
  },
  hover: {
    text: "hover:text-[#9ba3a2]",
    textSecondary: "hover:text-[#c0c0bf]",
    bg: "hover:bg-black/50",
  },
  focus: {
    outline: "focus-visible:outline focus-visible:outline-2",
    outlineColor: "focus-visible:outline-[#666]",
    borderColor: "focus-visible:border-[#666]",
  },
  input: {
    border: "border-[#4a4a48]",
    bg: "bg-[#2a2a28]",
    placeholder: "placeholder-[#737470]",
    placeholderSecondary: "placeholder-[#71726e]",
  },
  button: {
    bg: "bg-[#b85c38]",
    bgHover: "hover:bg-[#c97143]",
    bgActive: "active:bg-[#a84f30]",
  },
};

// Button focus styling - reusable pattern for interactive elements
const FOCUS_STYLES = cx(
  COLORS.focus.outline,
  COLORS.focus.outlineColor
);

// Header button styling for settings icon
const HEADER_BUTTON_STYLES = cx(
  COLORS.hover.bg,
  FOCUS_STYLES
);

// Collapsible section button styling
const COLLAPSIBLE_BUTTON_STYLES = (textColor: string, hoverColor: string) =>
  cx(
    "flex items-center gap-2 text-[11.5px] font-semibold",
    textColor,
    hoverColor,
    FOCUS_STYLES
  );

// Form input styling
const FORM_INPUT_STYLES = cx(
  "w-full border px-3 py-2",
  COLORS.input.border,
  COLORS.input.bg,
  "outline-none",
  COLORS.focus.borderColor,
  COLORS.focus.outline
);

// Help button styling for form fields
const FORM_HELP_BUTTON_STYLES = cx(
  COLORS.hover.bg,
  FOCUS_STYLES
);

// Action button styling (Awesome/Prepare buttons)
const ACTION_BUTTON_STYLES = cx(
  "flex-1 rounded-md px-4 py-2",
  COLORS.button.bg,
  "text-[11.5px] font-semibold",
  COLORS.text.buttonText,
  COLORS.button.bgHover,
  COLORS.button.bgActive,
  COLORS.focus.outline,
  "focus-visible:outline-[#8c8078]"
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-black p-5">
      <div className="mx-auto w-full max-w-sm space-y-6">
        {/* Header with title and settings button */}
        <div className="flex items-center justify-between">
          <h1 className={cx("text-[13.5px] font-semibold", COLORS.text.primary)}>
            UI magician Agent
          </h1>
          <button className={HEADER_BUTTON_STYLES}>
            <HiOutlineCog6Tooth
              size={24}
              className={COLORS.text.primary}
            />
          </button>
        </div>

        {/* Collapsible section for previous work item */}
        <div className="space-y-4">
          <button
            className={COLLAPSIBLE_BUTTON_STYLES(
              COLORS.text.tertiary,
              COLORS.hover.text
            )}
          >
            <HiChevronUp size={20} className={COLORS.text.tertiary} />
            <span>From entire frame to a singl...</span>
          </button>
        </div>

        {/* Main form section for adding new designs */}
        <div className="space-y-4">
          <button
            className={COLLAPSIBLE_BUTTON_STYLES(
              COLORS.text.secondary,
              COLORS.hover.textSecondary
            )}
          >
            <HiChevronUp size={20} className={COLORS.text.secondary} />
            <span>Add New Design</span>
          </button>

          {/* Form fields for design configuration */}
          <div className="space-y-4 pt-2">
            {/* Figma Personal Access Token input field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className={cx("text-[11.5px] font-semibold", COLORS.text.label)}>
                  Personal Access Token
                </label>
                <button className={FORM_HELP_BUTTON_STYLES}>
                  <HiQuestionMarkCircle
                    size={18}
                    className={COLORS.text.label}
                  />
                </button>
              </div>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className={cx(
                  FORM_INPUT_STYLES,
                  "text-[11.5px] font-semibold",
                  COLORS.text.input,
                  COLORS.input.placeholder
                )}
              />
            </div>

            {/* Figma design file URL input field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label className={cx("text-[11.5px] font-semibold", COLORS.text.label)}>
                  Design URL
                </label>
                <button className={FORM_HELP_BUTTON_STYLES}>
                  <HiQuestionMarkCircle
                    size={18}
                    className={COLORS.text.label}
                  />
                </button>
              </div>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className={cx(
                  FORM_INPUT_STYLES,
                  "text-[10.5px] font-semibold",
                  COLORS.text.inputSecondary,
                  COLORS.input.placeholderSecondary
                )}
              />
            </div>

            {/* Action buttons for form submission */}
            <div className="flex gap-4 pt-4">
              <button className={ACTION_BUTTON_STYLES}>
                Awesome
              </button>
              <button className={ACTION_BUTTON_STYLES}>
                Prepare
              </button>
            </div>
          </div>
        </div>

        {/* Section for displaying recent design breakdowns */}
        <div className="pt-8">
          <h2 className={cx("text-[13.5px] font-semibold", COLORS.text.recentBreakdowns)}>
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
