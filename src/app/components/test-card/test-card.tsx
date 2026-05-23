import { useState } from "react";
import { FiChevronDown, FiSettings, FiInfo } from "react-icons/fi";

// Color palette for the dark theme
const COLORS = {
  background: '#000000',
  headerText: '#b5b5b5',
  labelText: '#a3a3a2',
  inputBg: '#1a1a1a',
  inputBgFocus: '#2a2a2a',
  inputBorder: '#3a3a3a',
  inputBorderFocus: '#4a4a4a',
  inputText: '#71726e',
  buttonBg: '#7c3d2e',
  buttonBgHover: '#8d4630',
  buttonBgPressed: '#6a3426',
  buttonText: '#f4c3b3',
} as const;

// Input focus/blur style handlers
const createInputStateHandlers = () => ({
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = COLORS.inputBorderFocus;
    e.currentTarget.style.backgroundColor = COLORS.inputBgFocus;
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = COLORS.inputBorder;
    e.currentTarget.style.backgroundColor = COLORS.inputBg;
  },
});

// Button hover/press state handlers
const createButtonStateHandlers = () => ({
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
  },
  onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.buttonBg;
  },
  onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.buttonBgPressed;
  },
  onMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.buttonBgHover;
  },
});

export const TestCard = () => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(false);
  const [isAddDesignExpanded, setIsAddDesignExpanded] = useState(false);

  return (
    <div className="w-64 p-5" style={{ backgroundColor: COLORS.background }}>
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <FiSettings className="h-4 w-4" style={{ color: COLORS.headerText }} />
      </div>

      {/* Collapsible section: Frame selection */}
      <CollapsibleSection
        isExpanded={isFrameExpanded}
        onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
        label="From entire frame to a singl..."
      />

      {/* Collapsible section: Add new design */}
      <CollapsibleSection
        isExpanded={isAddDesignExpanded}
        onToggle={() => setIsAddDesignExpanded(!isAddDesignExpanded)}
        label="Add New Design"
      />

      {/* Personal Access Token input field */}
      <InputField
        label="Personal Access Token"
        type="password"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        marginBottom="mb-4"
      />

      {/* Design URL input field */}
      <InputField
        label="Design URL"
        type="text"
        placeholder="https://www.figma.com/file/:"
        marginBottom="mb-6"
      />

      {/* Action buttons */}
      <div className="mb-6 flex gap-2">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer section */}
      <div className="text-xs font-semibold" style={{ color: COLORS.labelText }}>
        Recent Breakdowns
      </div>

      {/* Copyright footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-xs" style={{ color: COLORS.labelText }}>
        © AutonomyAI
      </div>
    </div>
  );
};

interface CollapsibleSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  label: string;
}

const CollapsibleSection = ({
  isExpanded,
  onToggle,
  label,
}: CollapsibleSectionProps) => (
  <div className="mb-6">
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-2 text-xs font-semibold transition-colors"
      style={{ color: COLORS.headerText }}
    >
      <FiChevronDown
        className={`h-4 w-4 transition-transform ${
          isExpanded ? "rotate-0" : "-rotate-90"
        }`}
      />
      <span>{label}</span>
    </button>
  </div>
);

interface InputFieldProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
  marginBottom: string;
}

const InputField = ({
  label,
  type,
  placeholder,
  marginBottom,
}: InputFieldProps) => {
  const handlers = createInputStateHandlers();

  return (
    <div className={marginBottom}>
      <label
        className="mb-2 flex items-center gap-1 text-xs font-semibold"
        style={{ color: COLORS.labelText }}
      >
        <span>{label}</span>
        <FiInfo className="h-3 w-3" style={{ color: COLORS.labelText }} />
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border px-3 py-2 text-xs outline-none transition-colors"
        style={{
          borderColor: COLORS.inputBorder,
          backgroundColor: COLORS.inputBg,
          color: COLORS.inputText,
        }}
        {...handlers}
      />
    </div>
  );
};

interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => {
  const handlers = createButtonStateHandlers();

  return (
    <button
      className="flex-1 px-3 py-2 text-xs font-semibold transition-colors"
      style={{
        backgroundColor: COLORS.buttonBg,
        color: COLORS.buttonText,
      }}
      {...handlers}
    >
      {label}
    </button>
  );
}
