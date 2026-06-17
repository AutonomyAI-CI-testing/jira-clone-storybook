
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * Design constants mirroring the Figma specification.
 * Using hex values as these specific brand colors are not part of the standard Tailwind theme.
 */
const COLORS = {
  accent: "#c97c4a",
  button: "#b5622a",
  bgSubtle: "#252525",
  borderSubtle: "#3a3a3a",
  bgMain: "#1a1a1a",
} as const;

/**
 * TestCard is a static smoke test component used to verify UI rendering.
 * It follows a specific Figma design for a "UI magician Agent" tool.
 * 
 * Note: This component is purely presentational and uses hardcoded data
 * as per the initial smoke test requirements.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm mx-auto p-4 bg-[#1a1a1a] text-white min-h-screen"
      style={{ backgroundColor: COLORS.bgMain }}
    >
      {/* Header Row: Title and Settings */}
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <IoSettingsOutline
          className="w-5 h-5 text-gray-400"
          aria-label="Settings"
        />
      </div>

      {/* Status/Breadcrumb Row */}
      <div className="flex items-center gap-2 pb-6">
        <HiChevronUp className="w-5 h-5 text-[#c97c4a]" style={{ color: COLORS.accent }} />
        <p className="text-sm text-[#c97c4a]" style={{ color: COLORS.accent }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Section: Add New Design */}
      <div className="flex items-center gap-2 pb-4">
        <HiChevronUp className="w-5 h-5 text-white" />
        <h2 className="text-md font-semibold">Add New Design</h2>
      </div>

      {/* Field: Personal Access Token */}
      <div className="pb-4">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="pat" className="text-sm font-medium">
            Personal Access Token
          </label>
          <HiInformationCircle
            className="w-4 h-4 text-gray-400"
            aria-label="Help info for Personal Access Token"
          />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#252525] border border-[#3a3a3a] text-white placeholder-gray-500"
          style={{ backgroundColor: COLORS.bgSubtle, borderColor: COLORS.borderSubtle }}
        />
      </div>

      {/* Field: Design URL */}
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <label htmlFor="designUrl" className="text-sm font-medium">
            Design URL
          </label>
          <HiInformationCircle
            className="w-4 h-4 text-gray-400"
            aria-label="Help info for Design URL"
          />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#252525] border border-[#3a3a3a] text-white placeholder-gray-500"
          style={{ backgroundColor: COLORS.bgSubtle, borderColor: COLORS.borderSubtle }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pb-6">
        <button
          type="button"
          className="flex-1 py-2 rounded bg-[#b5622a] text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.button }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 rounded bg-[#b5622a] text-white font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.button }}
        >
          Prepare
        </button>
      </div>

      {/* Recent History Header */}
      <div>
        <h2 className="text-md font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
