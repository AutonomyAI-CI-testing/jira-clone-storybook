import { useState } from "react";
import {
  RiSettings3Line,
  RiInformationLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import cx from "classix";

// Color palette used throughout the component
const COLORS = {
  textPrimary: "text-[#b5b5b5]",
  textSecondary: "text-[#8b9291]",
  textTertiary: "text-[#737470]",
  textLabel: "text-[#a4a4a3]",
  textPlaceholder: "text-[#71726e]",
  border: "border-[#333]",
  background: "bg-[#1a1a1a]",
  buttonBrown: "bg-[#8B4513]",
  buttonBrownHover: "hover:bg-[#a0520e]",
  buttonBrownActive: "active:bg-[#764410]",
} as const;

// Input field component to reduce duplication
const InputField = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mb-4">
    <div className="mb-1 flex items-center gap-1">
      <label className={cx("font-primary-bold text-xs", COLORS.textLabel)}>
        {label}
      </label>
      <RiInformationLine size={12} className={COLORS.textLabel} />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className={cx(
        "w-full rounded border",
        COLORS.border,
        COLORS.background,
        "px-2 py-1.5 font-primary-bold text-xs",
        COLORS.textTertiary,
        `placeholder:${COLORS.textPlaceholder}`,
        "focus:outline-none focus:border-[#555]"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-64 rounded-md bg-black p-4">
      {/* Header with title and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className={cx("font-primary-bold text-sm", COLORS.textPrimary)}>
          UI magician Agent
        </h1>
        <RiSettings3Line size={16} className={COLORS.textPrimary} />
      </div>

      {/* Collapsible section with expand/collapse icon */}
      <div className={cx("mb-8 pb-4", COLORS.border, "border-b")}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center gap-2 text-left"
        >
          {isCollapsed ? (
            <RiArrowDownSLine size={14} className={COLORS.textSecondary} />
          ) : (
            <RiArrowUpSLine size={14} className={COLORS.textSecondary} />
          )}
          <span className={cx("font-primary-bold text-xs", COLORS.textSecondary)}>
            From entire frame to a singl...
          </span>
        </button>
        {!isCollapsed && (
          <div className={cx("mt-2 text-xs", COLORS.textTertiary)}>
            {/* Content area for expanded state */}
          </div>
        )}
      </div>

      {/* Add New Design section with inputs and action buttons */}
      <div className="mb-8">
        <button className="mb-4 flex w-full items-center gap-2 text-left">
          <RiArrowUpSLine size={14} className={COLORS.textSecondary} />
          <h2 className="font-primary-bold text-xs text-[#b0b0b0]">
            Add New Design
          </h2>
        </button>

        {/* Figma token and design URL inputs */}
        <InputField
          label="Personal Access Token"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        {/* Action buttons for design submission */}
        <div className="flex gap-2">
          <button
            className={cx(
              "flex-1 rounded px-2 py-1.5 font-primary-bold text-xs text-[#e8e8e8]",
              COLORS.buttonBrown,
              COLORS.buttonBrownHover,
              COLORS.buttonBrownActive
            )}
          >
            Awesome
          </button>
          <button
            className={cx(
              "flex-1 rounded px-2 py-1.5 font-primary-bold text-xs text-[#e8e8e8]",
              COLORS.buttonBrown,
              COLORS.buttonBrownHover,
              COLORS.buttonBrownActive
            )}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-8">
        <h2 className="font-primary-bold text-xs text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="mt-3 border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
