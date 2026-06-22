
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Custom colors from the Figma design that aren't yet in the theme
const COLORS = {
  BRAND: "#b5541c",
  BRAND_HOVER: "#a04a18",
  SURFACE: "#2a2a2a",
  INPUT_BG: "#1e1e1e",
  BORDER: "#4a4a4a",
  MUTED_TEXT: "#a07060",
} as const;

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="max-w-sm mx-auto rounded-lg p-6 shadow-lg text-white"
      style={{ backgroundColor: COLORS.SURFACE }}
    >
      <Header />
      <Subtitle />
      <FormSection />
      <ActionButtons />
      <h3 className="mt-6 text-base font-semibold text-white">Recent Breakdowns</h3>
    </div>
  );
};

const Header = () => (
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-lg font-bold text-white">UI magician Agent</h2>
    <FiSettings className="text-gray-400" size={20} />
  </div>
);

const Subtitle = () => (
  <div className="mb-6 flex items-center gap-2">
    <FiChevronUp style={{ color: COLORS.BRAND }} size={16} />
    <span className="text-sm" style={{ color: COLORS.MUTED_TEXT }}>
      From entire frame to a single component...
    </span>
  </div>
);

const FormSection = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <FiChevronUp className="text-white" size={16} />
      <h3 className="text-base font-semibold text-white">Add New Design</h3>
    </div>

    <InputField
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <InputField
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />
  </div>
);

const InputField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 flex items-center gap-1 text-sm font-medium text-gray-300"
    >
      {label} <FiInfo size={14} className="text-gray-400" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full rounded border border-[#4a4a4a] bg-[#1e1e1e] px-3 py-2 text-gray-300 placeholder:text-gray-500 focus:border-[#b5541c] focus:outline-none focus:ring-1 focus:ring-[#b5541c]"
    />
  </div>
);

const ActionButtons = () => (
  <div className="mt-6 flex justify-end gap-3">
    {["Awesome", "Prepare"].map((label) => (
      <button
        key={label}
        className="rounded-lg px-5 py-2 font-medium text-white transition-colors"
        style={{ backgroundColor: COLORS.BRAND }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.BRAND_HOVER)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.BRAND)
        }
      >
        {label}
      </button>
    ))}
  </div>
);

