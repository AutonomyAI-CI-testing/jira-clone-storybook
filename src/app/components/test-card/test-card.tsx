import { useState } from "react";
import cx from "classix";

// Color palette for the dark-themed UI magician card
const COLORS = {
  header: "#b5b5b5",
  agentDescription: "#8b9291",
  addNewDesignLabel: "#b2b2b1",
  fieldLabel: { token: "#a4a4a3", url: "#a3a3a2" },
  infoBorder: "#929291",
  inputBg: "#272822",
  inputBorderToken: "#a5adad",
  inputBorderUrl: "#929291",
  inputText: { token: "#737470", url: "#71726e" },
  buttonBg: "#843a17",
  buttonBgHover: "#9a4520",
  buttonText: "#8c8078",
  recentBreakdownsLabel: "#b0b0b0",
} as const;

// SVG icon components for consistent rendering and reusability
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-gray-400"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="text-gray-500"
  >
    <path d="M1 1l3 3 3-3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-gray-500"
  >
    <circle cx="8" cy="8" r="7" />
    <text x="8" y="10" textAnchor="middle" fontSize="8" fill="currentColor">
      i
    </text>
  </svg>
);

interface CollapsibleHeaderProps {
  expanded: boolean;
  onToggle: () => void;
  label: string;
  labelColor: string;
}

const CollapsibleHeader = ({
  expanded,
  onToggle,
  label,
  labelColor,
}: CollapsibleHeaderProps) => (
  <button onClick={onToggle} className="flex items-center gap-2 text-left">
    <span
      className={cx(
        "flex h-4 w-4 items-center justify-center transition-transform",
        expanded && "rotate-180"
      )}
    >
      <ChevronIcon />
    </span>
    <span
      className="font-primary text-[11.5px] font-semibold"
      style={{ color: labelColor }}
    >
      {label}
    </span>
  </button>
);

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  labelColor: string;
  inputBg: string;
  inputBorder: string;
  inputText: string;
}

const FormField = ({
  label,
  value,
  onChange,
  labelColor,
  inputBg,
  inputBorder,
  inputText,
}: FormFieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        className="font-primary text-[11.5px] font-semibold"
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <button
        className="flex h-4 w-4 items-center justify-center rounded-full border"
        style={{ borderColor: COLORS.infoBorder }}
        aria-label="Info"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 text-[11.5px]"
      style={{
        backgroundColor: inputBg,
        borderColor: inputBorder,
        color: inputText,
      }}
    />
  </div>
);

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

const ActionButton = ({ label, onClick }: ActionButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex flex-1 items-center justify-center rounded py-2 text-[11.5px] font-semibold transition-colors"
      style={{
        backgroundColor: hovered ? COLORS.buttonBgHover : COLORS.buttonBg,
        color: COLORS.buttonText,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const TestCard = (): JSX.Element => {
  // Track expanded/collapsed state for description and form sections
  const [agentExpanded, setAgentExpanded] = useState(true);
  const [designExpanded, setDesignExpanded] = useState(true);
  // Form field state for token and URL inputs
  const [token, setToken] = useState("figd_xxxxxxxxxxxxxxxxxx");
  const [url, setUrl] = useState("https://www.figma.com/file/:");

  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-5 bg-black p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1
          className="font-primary text-[13.5px] font-semibold"
          style={{ color: COLORS.header }}
        >
          UI magician Agent
        </h1>
        <button
          className="hover:bg-gray-800 flex h-6 w-6 items-center justify-center rounded"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Agent Description Section */}
      <div className="flex flex-col gap-3">
        <CollapsibleHeader
          expanded={agentExpanded}
          onToggle={() => setAgentExpanded(!agentExpanded)}
          label="From entire frame to a singl..."
          labelColor={COLORS.agentDescription}
        />
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-3">
        <CollapsibleHeader
          expanded={designExpanded}
          onToggle={() => setDesignExpanded(!designExpanded)}
          label="Add New Design"
          labelColor={COLORS.addNewDesignLabel}
        />

        {designExpanded && (
          <div className="flex flex-col gap-4">
            {/* Personal Access Token Field */}
            <FormField
              label="Personal Access Token"
              value={token}
              onChange={setToken}
              labelColor={COLORS.fieldLabel.token}
              inputBg={COLORS.inputBg}
              inputBorder={COLORS.inputBorderToken}
              inputText={COLORS.inputText.token}
            />

            {/* Design URL Field */}
            <FormField
              label="Design URL"
              value={url}
              onChange={setUrl}
              labelColor={COLORS.fieldLabel.url}
              inputBg={COLORS.inputBg}
              inputBorder={COLORS.inputBorderUrl}
              inputText={COLORS.inputText.url}
            />

            {/* Action Buttons */}
            <div className="flex gap-4">
              <ActionButton label="Awesome" />
              <ActionButton label="Prepare" />
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-4">
        <h2
          className="font-primary text-[13.5px] font-semibold"
          style={{ color: COLORS.recentBreakdownsLabel }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
