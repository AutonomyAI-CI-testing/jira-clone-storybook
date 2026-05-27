import { useState } from "react";
import cx from "classix";
import { FiChevronDown, FiSettings, FiInfo } from "react-icons/fi";

/**
 * CollapsibleButton: A reusable button component for toggling sections.
 * Shows a chevron icon that rotates based on open state and displays the section title.
 */
const CollapsibleButton = ({
  isOpen,
  onClick,
  label,
  isBold = false,
}: {
  isOpen: boolean;
  onClick: () => void;
  label: string;
  isBold?: boolean;
}): JSX.Element => (
  <button
    onClick={onClick}
    className="flex w-full items-center gap-2 rounded p-2 hover:bg-gray-800"
  >
    <FiChevronDown
      size={16}
      className={cx(
        "text-gray-400 transition-transform duration-200",
        isOpen && "rotate-180"
      )}
    />
    <span
      className={cx(
        "text-xs",
        isBold ? "font-primary-bold text-gray-300" : "text-gray-400"
      )}
    >
      {label}
    </span>
  </button>
);

/**
 * InfoIconButton: A small button with an info icon for help/tooltip triggers.
 */
const InfoIconButton = (): JSX.Element => (
  <button
    className="flex items-center justify-center rounded p-0.5 hover:bg-gray-800"
    aria-label="Info"
  >
    <FiInfo size={12} className="text-gray-400" />
  </button>
);

/**
 * InputField: A reusable input field with label and optional info icon.
 */
const InputField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
}: {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className="text-xs text-gray-400">{label}</label>
      <InfoIconButton />
    </div>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cx(
        "h-9 w-full rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-gray-300 placeholder:text-xs placeholder:text-gray-500",
        "hover:bg-gray-700 focus:bg-gray-800 focus:outline-none focus-visible:border-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400"
      )}
    />
  </div>
);

/**
 * ActionButton: A reusable action button with consistent styling.
 */
const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    className={cx(
      "flex-1 rounded bg-orange-800 px-3 py-2 font-primary-bold text-xs text-gray-300",
      "hover:bg-orange-700 active:bg-orange-900",
      "transition-colors duration-150"
    )}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState<boolean>(true);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState<boolean>(true);
  const [personalAccessToken, setPersonalAccessToken] = useState<string>("");
  const [designUrl, setDesignUrl] = useState<string>("");

  return (
    <div className="w-64 rounded-md border border-border bg-black p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-primary-bold text-sm text-gray-300">
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center rounded p-1 hover:bg-gray-800"
          aria-label="Settings"
        >
          <FiSettings size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-4">
        <CollapsibleButton
          isOpen={isCollapsibleOpen}
          onClick={() => setIsCollapsibleOpen(!isCollapsibleOpen)}
          label="From entire frame to a singl..."
        />
        {isCollapsibleOpen && (
          <div className="px-4 py-2 text-xs text-gray-400">
            {/* Content can be added here */}
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 border-t border-gray-700 pt-4">
        <CollapsibleButton
          isOpen={isAddNewDesignOpen}
          onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          label="Add New Design"
          isBold
        />

        {isAddNewDesignOpen && (
          <div className="space-y-3 px-2 py-3">
            {/* Personal Access Token Input */}
            <InputField
              type="password"
              label="Personal Access Token"
              value={personalAccessToken}
              onChange={setPersonalAccessToken}
              placeholder="figd_xxxxxxxxxxxxxxxxx"
            />

            {/* Design URL Input */}
            <InputField
              type="text"
              label="Design URL"
              value={designUrl}
              onChange={setDesignUrl}
              placeholder="https://www.figma.com/file/:"
            />

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <ActionButton>Awesome</ActionButton>
              <ActionButton>Prepare</ActionButton>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-gray-700 pt-4">
        <h2 className="font-primary-bold text-xs text-gray-400">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
