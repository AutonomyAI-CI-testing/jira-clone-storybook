import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * Design constants derived from the Figma reference.
 * Note: These use hex codes as the project's Tailwind theme is strictly tokenized
 * and does not include these specific dark-mode agent colors.
 */
const COLORS = {
  bg: "#2a2a2a",
  text: "#e8e8e8",
  textSubtle: "#9aa0a6",
  textAmber: "#c8763a", // Amber/orange for the agent's branding
  border: "#4a4a4a",
  btnBg: "#b85c2b",
  white: "#ffffff",
} as const;

/**
 * Shared input styles to ensure consistency across form fields.
 */
const inputStyle = {
  backgroundColor: "transparent",
  borderColor: COLORS.border,
  color: COLORS.textSubtle,
};

/**
 * TestCard component: A smoke test component that validates rendering in isolation.
 * Replicates a specific "UI Magician Agent" panel design.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen p-6 font-sans"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      {/* Header section with brand and settings */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold" style={{ color: COLORS.white }}>
          UI magician Agent
        </h1>
        <FiSettings style={{ color: COLORS.textSubtle }} size={24} />
      </header>

      {/* Hero-like subtitle with branding color */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp style={{ color: COLORS.textAmber }} aria-hidden="true" />
        <span className="text-sm font-medium" style={{ color: COLORS.textAmber }}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-8" aria-hidden="true" />

      {/* Main configuration section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp style={{ color: COLORS.white }} aria-hidden="true" />
          <h2 className="text-xl font-bold" style={{ color: COLORS.white }}>
            Add New Design
          </h2>
        </div>

        {/* Form fields: Personal Access Token */}
        <div className="mb-4">
          <label
            htmlFor="pat-input"
            className="flex items-center gap-1 text-sm mb-1"
            style={{ color: COLORS.text }}
          >
            Personal Access Token
            <FiInfo style={{ color: COLORS.textSubtle }} size={14} />
          </label>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded px-3 py-2 border outline-none"
            style={inputStyle}
          />
        </div>

        {/* Form fields: Design URL */}
        <div className="mb-6">
          <label
            htmlFor="url-input"
            className="flex items-center gap-1 text-sm mb-1"
            style={{ color: COLORS.text }}
          >
            Design URL
            <FiInfo style={{ color: COLORS.textSubtle }} size={14} />
          </label>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded px-3 py-2 border outline-none"
            style={inputStyle}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="px-6 py-3 rounded-xl font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.btnBg, color: COLORS.white }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="px-6 py-3 rounded-xl font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.btnBg, color: COLORS.white }}
          >
            Prepare
          </button>
        </div>
      </section>

      {/* Footer / History section */}
      <footer className="mt-8">
        <h2 className="text-xl font-bold" style={{ color: COLORS.white }}>
          Recent Breakdowns
        </h2>
      </footer>
    </div>
  );
};
