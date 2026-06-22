import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

// Color constants matching the "UI magician Agent" Figma design
// Carbon-neutral dark background and burnt-orange accents
const THEME = {
  BACKGROUND: "#1c1917", // zinc-900 equivalent
  INPUT_BG: "#292524",
  INPUT_BORDER: "#44403c",
  ACCENT: "#b45309", // Muted orange text
  BUTTON_PRIMARY: "#9a3412", // Burnt orange CTA
  TEXT_LIGHT: "#e7e5e4",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-4 rounded-xl p-5 w-full max-w-sm"
      style={{ backgroundColor: THEME.BACKGROUND, color: THEME.TEXT_LIGHT }}
    >
      {/* Header Row: Main title and accessibility settings */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiCog size={22} className="text-white opacity-70" />
      </div>

      {/* Subtitle: High-level process description with chevron indicator */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={14} style={{ color: THEME.ACCENT }} />
        <span className="text-sm" style={{ color: THEME.ACCENT }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Form Section: Input area for new designs */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token Field: Read-only placeholder for demonstration */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm text-white opacity-80">
            Personal Access Token
          </label>
          <HiInformationCircle size={16} className="text-white opacity-50" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: THEME.INPUT_BG,
            border: `1px solid ${THEME.INPUT_BORDER}`,
            color: THEME.TEXT_LIGHT,
          }}
          readOnly
        />
      </div>

      {/* Design URL Field: Target Figma file link input */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm text-white opacity-80">Design URL</label>
          <HiInformationCircle size={16} className="text-white opacity-50" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded-md px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: THEME.INPUT_BG,
            border: `1px solid ${THEME.INPUT_BORDER}`,
            color: THEME.TEXT_LIGHT,
          }}
          readOnly
        />
      </div>

      {/* Action Row: Primary CTAs for processing designs */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: THEME.BUTTON_PRIMARY }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: THEME.BUTTON_PRIMARY }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: List of previous activity */}
      <div className="mt-2">
        <span className="text-base font-bold text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
