import cx from "classix";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FiSettings, FiChevronUp } from "react-icons/fi";

// Design system colors - intentional custom palette for dark UI theme
const COLORS = {
  background: "#1e1a15",
  textPrimary: "#e8e0d8",
  textSecondary: "#8a8078",
  textMuted: "#c4b5a0",
  border: "#6a5f55",
  buttonPrimary: "#994D1C",
  buttonText: "#f5e6d3",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="flex w-full flex-col rounded-lg py-6"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-10">
        <h1
          className="font-primary-bold text-lg"
          style={{ color: COLORS.textPrimary }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex h-8 w-8 items-center justify-center rounded"
          aria-label="Settings"
        >
          <FiSettings
            className="h-5 w-5"
            style={{ color: COLORS.textSecondary }}
          />
        </button>
      </div>

      {/* Collapsible section hint - truncated preview text */}
      <div className="mt-6 flex items-center gap-2 px-10">
        <FiChevronUp
          className="h-4 w-4"
          style={{ color: COLORS.textSecondary }}
        />
        <p className="text-sm" style={{ color: COLORS.textSecondary }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mt-6 flex flex-col gap-6 px-10">
        <div className="flex items-center gap-2">
          <FiChevronUp
            className="h-4 w-4"
            style={{ color: COLORS.textPrimary }}
          />
          <h2
            className="font-primary-bold text-lg"
            style={{ color: COLORS.textPrimary }}
          >
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Field - read-only, intended for display */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <label
              htmlFor="personal-access-token"
              className="text-sm"
              style={{ color: COLORS.textPrimary }}
            >
              Personal Access Token
            </label>
            <HiOutlineQuestionMarkCircle
              className="h-4 w-4"
              style={{ color: COLORS.textSecondary }}
            />
          </div>
          <input
            id="personal-access-token"
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              "w-full rounded bg-transparent px-3 py-2 text-sm",
              "focus:outline-none focus:ring-2"
            )}
            style={{
              borderColor: COLORS.border,
              borderWidth: "2px",
              color: COLORS.textMuted,
            }}
          />
        </div>

        {/* Design URL Field - read-only, intended for display */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <label
              htmlFor="design-url"
              className="text-sm"
              style={{ color: COLORS.textPrimary }}
            >
              Design URL
            </label>
            <HiOutlineQuestionMarkCircle
              className="h-4 w-4"
              style={{ color: COLORS.textSecondary }}
            />
          </div>
          <input
            id="design-url"
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "w-full rounded bg-transparent px-3 py-2 text-sm",
              "focus:outline-none focus:ring-2"
            )}
            style={{
              borderColor: COLORS.border,
              borderWidth: "2px",
              color: COLORS.textMuted,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            className={cx(
              "flex-1 rounded-lg px-4 py-2.5",
              "font-primary text-sm",
              "transition-colors"
            )}
            style={{
              backgroundColor: COLORS.buttonPrimary,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className={cx(
              "flex-1 rounded-lg px-4 py-2.5",
              "font-primary text-sm",
              "transition-colors"
            )}
            style={{
              backgroundColor: COLORS.buttonPrimary,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-6 px-10">
        <h2
          className="font-primary-bold text-xl"
          style={{ color: COLORS.textPrimary }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer - copyright attribution */}
      <div
        className="border-gray-300 mt-6 border-t pt-3 text-center text-sm"
        style={{ color: COLORS.textSecondary }}
      >
        © AutonomyAI
      </div>
    </div>
  );
};
