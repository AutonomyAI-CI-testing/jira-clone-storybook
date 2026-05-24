import { useState } from "react";
import {
  FiSettings,
  FiChevronUp,
  FiChevronDown,
  FiInfo,
} from "react-icons/fi";

// Collapsible section button with chevron icon
interface CollapsibleButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  label: string;
  size?: "sm" | "md";
}

const CollapsibleButton = ({
  isExpanded,
  onToggle,
  label,
  size = "md",
}: CollapsibleButtonProps): JSX.Element => {
  const sizeClasses = size === "sm" ? "text-xs text-gray-500" : "text-sm text-gray-400";
  const hoverClasses = size === "sm" ? "hover:text-gray-400" : "hover:text-gray-300";
  
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 font-semibold ${sizeClasses} ${hoverClasses}`}
    >
      {isExpanded ? (
        <FiChevronUp size={16} />
      ) : (
        <FiChevronDown size={16} />
      )}
      <span>{label}</span>
    </button>
  );
};

// Input field with label and info icon
interface TokenInputProps {
  label: string;
  placeholder: string;
  marginBottom?: string;
}

const TokenInput = ({
  label,
  placeholder,
  marginBottom = "mb-4",
}: TokenInputProps): JSX.Element => (
  <div className={marginBottom}>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <FiInfo size={15} className="text-gray-500" aria-label="Info" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-neutral-600 bg-neutral-800 px-3 py-2 text-xs font-semibold text-neutral-500 placeholder-neutral-600 focus:outline-none"
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-400">
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center pr-1 text-gray-400 hover:text-gray-300"
          aria-label="Settings"
        >
          <FiSettings size={16} />
        </button>
      </div>

      {/* Collapsible frame selection section */}
      <div className="mb-6">
        <CollapsibleButton
          isExpanded={isFrameExpanded}
          onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
          label="From entire frame to a singl..."
          size="sm"
        />
      </div>

      {/* Collapsible design creation section */}
      <div className="mb-6">
        <CollapsibleButton
          isExpanded={isDesignExpanded}
          onToggle={() => setIsDesignExpanded(!isDesignExpanded)}
          label="Add New Design"
        />
      </div>

      {/* Configuration fields (shown when design section is expanded) */}
      {isDesignExpanded && (
        <>
          <TokenInput
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />

          <TokenInput
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            marginBottom="mb-6"
          />

          {/* Action buttons for confirming or preparing design */}
          <div className="mb-8 flex gap-6">
            <button className="flex-1 rounded bg-rust-700 px-4 py-2 text-xs font-semibold text-rust-200 hover:bg-rust-600 active:bg-rust-800">
              Awesome
            </button>
            <button className="flex-1 rounded bg-rust-700 px-4 py-2 text-xs font-semibold text-rust-200 hover:bg-rust-600 active:bg-rust-800">
              Prepare
            </button>
          </div>
        </>
      )}

      {/* Recent activity/breakdowns section */}
      <div className="text-sm font-semibold text-gray-400">
        Recent Breakdowns
      </div>

      {/* Copyright footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-xs font-semibold text-gray-500">
        © AutonomyAI
      </div>
    </div>
  );
};
