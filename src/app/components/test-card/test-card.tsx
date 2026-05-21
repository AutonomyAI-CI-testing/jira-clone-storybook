import cx from "classix";
import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Color palette for the dark-themed card UI
const COLORS = {
  background: "#2c2c2c",
  text: "#b5b5b5",
  textSecondary: "#b2b2b1",
  textTertiary: "#a4a4a3",
  textSubtle: "#8b9291",
  border: "#555555",
  placeholder: "#737470",
  button: "#9D5B3A",
  buttonText: "#f5f5f5",
} as const;

const INPUT_STYLES = {
  base: "w-full rounded border-2 px-4 py-3",
  text: "font-primary-semibold text-[13px] leading-[16px]",
  placeholder: "placeholder:text-[#737470]",
  focus: "focus:outline-none",
} as const;

const BUTTON_STYLES = {
  base: "rounded px-8 py-3",
  text: "font-primary-semibold text-[14px] leading-[17px]",
  interaction: "transition-colors hover:opacity-90 active:opacity-80",
} as const;

// Reusable input field component
const TokenInput = ({
  id,
  label,
  placeholder,
  labelColor = COLORS.textTertiary,
  placeholderColor = COLORS.placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
  labelColor?: string;
  placeholderColor?: string;
}) => (
  <div className="mb-8">
    <div className="mb-3 flex items-center gap-1.5">
      <label
        htmlFor={id}
        className="font-primary-semibold text-[14px] leading-[17px]"
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <IoInformationCircleOutline
        className="h-5 w-5"
        style={{ color: labelColor }}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        INPUT_STYLES.base,
        INPUT_STYLES.text,
        INPUT_STYLES.placeholder,
        INPUT_STYLES.focus
      )}
      style={{
        backgroundColor: COLORS.background,
        borderColor: COLORS.border,
        color: placeholderColor,
      }}
    />
  </div>
);

// Reusable action button component
const ActionButton = ({
  label,
  backgroundColor = COLORS.button,
}: {
  label: string;
  backgroundColor?: string;
}) => (
  <button
    className={cx(
      BUTTON_STYLES.base,
      BUTTON_STYLES.text,
      BUTTON_STYLES.interaction
    )}
    style={{ backgroundColor, color: COLORS.buttonText }}
  >
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      className="w-[254px] p-8 text-white"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="font-primary-semibold text-[20px] leading-[24px]"
          style={{ color: COLORS.text }}
        >
          UI magician Agent
        </h1>
        <IoSettingsOutline className="h-6 w-6" style={{ color: COLORS.text }} />
      </div>

      {/* Collapsible hint about frame processing */}
      <div className="mb-8 flex items-start gap-2">
        <IoIosArrowDown
          className="mt-0.5 h-5 w-5 flex-shrink-0"
          style={{ color: COLORS.textSubtle }}
        />
        <p
          className="font-primary-semibold text-[14px] leading-[17px]"
          style={{ color: COLORS.textSubtle }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Section to add new design with expand icon */}
      <div className="mb-8 flex items-center gap-2">
        <IoIosArrowUp
          className="h-5 w-5 flex-shrink-0"
          style={{ color: COLORS.textSecondary }}
        />
        <h2
          className="font-primary-semibold text-[16px] leading-[20px]"
          style={{ color: COLORS.textSecondary }}
        >
          Add New Design
        </h2>
      </div>

      {/* Figma token and URL input fields */}
      <TokenInput
        id="token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <div className="mb-10">
        <div className="mb-3 flex items-center gap-1.5">
          <label
            htmlFor="url"
            className="font-primary-semibold text-[14px] leading-[17px]"
            style={{ color: COLORS.textTertiary }}
          >
            Design URL
          </label>
          <IoInformationCircleOutline
            className="h-5 w-5"
            style={{ color: COLORS.textTertiary }}
          />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            INPUT_STYLES.base,
            INPUT_STYLES.text,
            INPUT_STYLES.placeholder,
            INPUT_STYLES.focus
          )}
          style={{
            backgroundColor: COLORS.background,
            borderColor: COLORS.border,
            color: "#71726e",
          }}
        />
      </div>

      {/* Action buttons for submitting design */}
      <div className="mb-10 flex items-center gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section showing recent breakdowns */}
      <div className="mb-8">
        <h3
          className="font-primary-semibold text-[16px] leading-[20px]"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[12px]">© AutonomyAI</p>
      </div>
    </div>
  );
};
