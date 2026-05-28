import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

// Dark theme color palette for the UI agent interface
const COLORS = {
  background: "#1e1e1e",
  inputBg: "#272822",
  primaryText: "#b5b5b5",
  secondaryText: "#8b9291",
  labelText: "#a4a4a3",
  placeholderText: "#737470",
  headingText: "#b2b2b1",
  subtleText: "#b0b0b0",
  primaryBorder: "#929291",
  secondaryBorder: "#a5adad",
  buttonBg: "#843a17",
  buttonText: "#d4b8a0",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full px-8 pt-10"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Row */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.primaryText }}>
          UI magician Agent
        </h1>
        <FiSettings size={20} style={{ color: COLORS.primaryText }} />
      </div>

      {/* Subtitle Row */}
      <div className="mb-16 flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: COLORS.secondaryText }} />
        <p className="text-xs font-semibold" style={{ color: COLORS.secondaryText }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: COLORS.headingText }} />
        <h2 className="text-sm font-semibold" style={{ color: COLORS.headingText }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="token"
            className="text-xs font-semibold"
            style={{ color: COLORS.labelText }}
          >
            Personal Access Token
          </label>
          <FiInfo size={16} style={{ color: COLORS.labelText }} />
        </div>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border-2 px-3 py-4 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.primaryBorder,
            color: COLORS.placeholderText,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-12">
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="url"
            className="text-xs font-semibold"
            style={{ color: COLORS.labelText }}
          >
            Design URL
          </label>
          <FiInfo size={16} style={{ color: COLORS.labelText }} />
        </div>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 px-3 py-4 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.secondaryBorder,
            color: "#71726e",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-20 flex gap-4">
        <button
          className="flex-1 rounded px-8 py-4 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-8 py-4 text-sm font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="text-sm font-semibold" style={{ color: COLORS.subtleText }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
