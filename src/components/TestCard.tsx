import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Design-specific color palette.
// Hex values are applied via inline styles because this file lives outside
// the project's Tailwind content-scan path (./src/app/**/*), so arbitrary
// Tailwind color classes would not be compiled into the bundle.
const COLORS = {
  background: "#282420",
  textPrimary: "#f0ebe5",
  textMuted: "#b07050",
  inputBg: "#1e1b18",
  inputBorder: "#4a3f35",
  buttonBg: "#b05a28",
} as const;

/**
 * TestCard – self-contained dark-panel card replicating the "Add New Design"
 * workflow UI from the UI Magician Agent Figma design.
 *
 * No props; renders a static layout for integration and smoke-test purposes.
 * Root element carries `id="testElem"` for test-selector targeting.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
      className="w-full max-w-xs p-4 font-sans space-y-4"
    >
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <HiCog className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* ── Subtitle row ──────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2">
        <HiChevronUp
          className="h-5 w-5"
          style={{ color: COLORS.textMuted }}
          aria-hidden="true"
        />
        <span className="text-sm" style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ────────────────────────────────────────── */}
      <section aria-label="Add New Design" className="space-y-3 pt-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="h-5 w-5" aria-hidden="true" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        {/* Personal Access Token */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label htmlFor="pat-input" className="text-sm">
              Personal Access Token
            </label>
            <HiInformationCircle
              className="h-5 w-5"
              style={{ color: COLORS.textPrimary }}
              aria-label="Personal access tokens are generated in Figma account settings"
            />
          </div>
          <input
            type="text"
            id="pat-input"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 text-sm outline-none transition-shadow focus:ring-2 focus:ring-orange-700"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              borderWidth: "1px",
              color: COLORS.textPrimary,
            }}
          />
        </div>

        {/* Design URL */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label htmlFor="design-url-input" className="text-sm">
              Design URL
            </label>
            <HiInformationCircle
              className="h-5 w-5"
              style={{ color: COLORS.textPrimary }}
              aria-label="Paste a Figma file or frame URL"
            />
          </div>
          <input
            type="url"
            id="design-url-input"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 text-sm outline-none transition-shadow focus:ring-2 focus:ring-orange-700"
            style={{
              backgroundColor: COLORS.inputBg,
              borderColor: COLORS.inputBorder,
              borderWidth: "1px",
              color: COLORS.textPrimary,
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            className="flex-1 px-6 py-3 rounded text-white font-semibold transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: COLORS.buttonBg }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 px-6 py-3 rounded text-white font-semibold transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: COLORS.buttonBg }}
          >
            Prepare
          </button>
        </div>
      </section>

      {/* ── Recent Breakdowns ─────────────────────────────────────────────── */}
      <section aria-label="Recent Breakdowns" className="pt-4">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </section>
    </div>
  );
};
