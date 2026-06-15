
import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Arbitrary colors from Figma design not present in semantic theme
const COLORS = {
  CARD_BG: "#2a2a2a",
  INPUT_BG: "#1a1a1a",
  BRAND_ORANGE: "#b5502a",
} as const;

/**
 * TestCard: A self-contained smoke test component that replicates the 
 * "UI magician Agent" design. Used for brand fidelity verification.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div 
      className="rounded-lg p-5 w-[280px] flex flex-col gap-4"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-amber-600 text-sm" />
        <p className="text-amber-600 text-sm truncate">From entire frame to a singl...</p>
      </div>

      {/* divider */}
      <div className="border-b border-gray-600"></div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-white text-sm" />
        <h3 className="text-white font-bold text-lg">Add New Design</h3>
      </div>

      {/* Personal Access Token */}
      <div>
        <label htmlFor="personal-access-token" className="text-white text-sm flex items-center gap-1 mb-1">
          Personal Access Token
          <AiOutlineInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-gray-600 text-gray-400 text-sm p-2 rounded"
          style={{ backgroundColor: COLORS.INPUT_BG }}
        />
      </div>

      {/* Design URL */}
      <div>
        <label htmlFor="design-url" className="text-white text-sm flex items-center gap-1 mb-1">
          Design URL
          <AiOutlineInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full border border-gray-600 text-gray-400 text-sm p-2 rounded"
          style={{ backgroundColor: COLORS.INPUT_BG }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-2">
        <button 
          className="flex-1 text-white rounded-lg px-4 py-2 text-sm font-medium"
          style={{ backgroundColor: COLORS.BRAND_ORANGE }}
        >
          Awesome
        </button>
        <button 
          className="flex-1 text-white rounded-lg px-4 py-2 text-sm font-medium"
          style={{ backgroundColor: COLORS.BRAND_ORANGE }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-white font-bold text-lg">Recent Breakdowns</h3>
    </div>
  </div>
);
