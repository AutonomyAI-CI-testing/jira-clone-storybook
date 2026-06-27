
/**
 * Design constants derived from Figma specifications.
 * These map to arbitrary Tailwind values to ensure fidelity with the provided design.
 */
const COLORS = {
  CARD_BG: "#2a2a2a",
  HEADER: "#b5b5b5",
  SUBTITLE: "#8b9291",
  ADD_NEW_DESIGN: "#b2b2b1",
  LABEL: "#a4a4a3",
  INPUT_BORDER: "#3a3a3a",
  INPUT_TEXT: "#737470",
  BUTTON_BG: "#b5531a",
  BUTTON_TEXT: "#8c8078",
  FOOTER: "#b0b0b0",
} as const;

/**
 * Shared SVG icons for the component.
 */
const Icons = {
  Settings: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={COLORS.HEADER}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
  ChevronDown: ({ color }: { color: string }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rotate-180"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  ),
  Info: ({ color }: { color: string }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  ),
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FormField = ({ id, label, placeholder }: FormFieldProps) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center space-x-1 mb-2">
      <label htmlFor={id} className="text-[#a4a4a3] text-[11.5px] font-semibold">
        {label}
      </label>
      <Icons.Info color={COLORS.LABEL} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      // BG transparent per design to show card color, border matches Figma spec
      className="w-full p-2 bg-transparent border border-[#3a3a3a] rounded-md text-[#737470] text-[11.5px] focus:outline-none"
    />
  </div>
);

/**
 * TestCard: A smoke-test component visually replicating the "UI magician Agent" panel.
 * Intended for one-pass render validation with Tailwind and Storybook.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#2a2a2a] p-4 text-white rounded-lg shadow-xl"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </h2>
        <Icons.Settings />
      </div>

      {/* Subtitle Section */}
      <div className="flex items-center space-x-1 mb-6">
        <Icons.ChevronDown color={COLORS.SUBTITLE} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer per Figma layout */}
      <div className="h-6" />

      {/* Add New Design Section */}
      <div className="flex items-center space-x-1 mb-4">
        <Icons.ChevronDown color={COLORS.ADD_NEW_DESIGN} />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </h3>
      </div>

      {/* Form Fields */}
      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:/"
      />

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 py-2 rounded-md bg-[#b5531a] text-[#8c8078] text-[11.5px] font-semibold hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded-md bg-[#b5531a] text-[#8c8078] text-[11.5px] font-semibold hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer / History Section */}
      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

