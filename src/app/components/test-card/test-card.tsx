import { useState } from "react";
import cx from "classix";

/**
 * InfoIcon - A small circular info icon used in form labels
 */
const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className || "h-3.5 w-3.5 text-[#a4a4a3]"}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" opacity="0.1" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="12"
      fontWeight="bold"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

/**
 * CollapsibleIcon - An SVG arrow icon that rotates based on open/closed state
 */
const CollapsibleIcon = ({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}): JSX.Element => (
  <svg
    className={cx(
      "h-4 w-4 transform text-[#b2b2b1] transition-transform",
      isOpen ? "" : "rotate-180",
      className
    )}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

/**
 * SettingsIcon - A gear icon used in the header
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-6 w-6 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

/**
 * CollapsibleSection - A reusable collapsible header component
 */
const CollapsibleSection = ({
  isOpen,
  onToggle,
  title,
  className,
}: {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  className?: string;
}): JSX.Element => (
  <div
    className={cx("flex cursor-pointer items-center gap-2", className)}
    onClick={onToggle}
  >
    <CollapsibleIcon isOpen={isOpen} />
    <span className="font-primary-bold text-sm text-[#b2b2b1]">{title}</span>
  </div>
);

/**
 * InputField - A labeled input with an info icon
 */
const InputField = ({
  label,
  type,
  placeholder,
  readOnly,
}: {
  label: string;
  type: string;
  placeholder: string;
  readOnly?: boolean;
}): JSX.Element => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-1.5">
      <label className="font-primary-bold text-sm text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-[#444444] bg-[#1a1a1a] px-3 py-2 text-xs text-[#737470] placeholder-[#595856] focus:outline-none"
      readOnly={readOnly}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameSectionOpen, setIsFrameSectionOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div className="min-h-screen w-full space-y-6 bg-[#000000] p-8 font-primary text-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Frame Section */}
      <CollapsibleSection
        isOpen={isFrameSectionOpen}
        onToggle={() => setIsFrameSectionOpen(!isFrameSectionOpen)}
        title="From entire frame to a singl..."
      />

      {/* Add New Design Section */}
      <CollapsibleSection
        isOpen={isAddDesignOpen}
        onToggle={() => setIsAddDesignOpen(!isAddDesignOpen)}
        title="Add New Design"
        className="text-[#b0b0b0]"
      />

      {isAddDesignOpen && (
        <div className="space-y-4">
          {/* Personal Access Token Input */}
          <InputField
            label="Personal Access Token"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />

          {/* Design URL Input */}
          <InputField
            label="Design URL"
            type="text"
            placeholder="https://www.figma.com/file/:"
          />

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 border border-[#a0522d] bg-[#a0522d] px-3 py-2 font-primary-bold text-xs text-white hover:bg-[#9d5a3c] focus:outline-none">
              Awesome
            </button>
            <button className="flex-1 border border-[#a0522d] bg-[#a0522d] px-3 py-2 font-primary-bold text-xs text-white hover:bg-[#9d5a3c] focus:outline-none">
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns Section */}
      <div className="pt-8">
        <h3 className="font-primary-bold text-sm text-[#8b9291]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="font-primary-bold text-xs text-[#8b9291]">© AutonomyAI</p>
      </div>
    </div>
  );
};
