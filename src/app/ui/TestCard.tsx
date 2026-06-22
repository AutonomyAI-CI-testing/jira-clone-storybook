import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Design constants from Figma reference
const COLORS = {
  BACKGROUND: "#2a2a2a",
  INPUT_BG: "#272822",
  ACCENT_BROWN: "#843a17",
  TITLE: "#b5b5b5",
  SUBTITLE: "#8b9291",
  SECTION_HEADER: "#b2b2b1",
  LABEL: "#a4a4a3",
  LABEL_SECONDARY: "#a3a3a2",
  PLACEHOLDER: "#737470",
  PLACEHOLDER_SECONDARY: "#71726e",
  BORDER_PRIMARY: "#929291",
  BORDER_SECONDARY: "#a5adad",
  RECENT: "#b0b0b0",
} as const;

/**
 * TestCard component replicates the "UI magician Agent" panel from Figma.
 * It's a self-contained component used for design validation.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] p-5 font-[Inter,sans-serif] text-white"
    style={{ backgroundColor: COLORS.BACKGROUND }}
  >
    {/* Agent Header */}
    <div className="flex justify-between items-center mb-4">
      <h2
        className="font-semibold text-[13.5px]"
        style={{ color: COLORS.TITLE }}
      >
        UI magician Agent
      </h2>
      <IoSettingsOutline
        className="text-[16px]"
        style={{ color: COLORS.TITLE }}
      />
    </div>

    {/* Capability Subtitle */}
    <div className="flex items-center gap-1 mb-8">
      <FiChevronUp style={{ color: COLORS.SUBTITLE }} />
      <p
        className="font-semibold text-[11.5px]"
        style={{ color: COLORS.SUBTITLE }}
      >
        From entire frame to a singl...
      </p>
    </div>

    {/* Section: Add New Design */}
    <div className="flex items-center gap-2 mt-8 mb-4">
      <FiChevronUp style={{ color: COLORS.SECTION_HEADER }} />
      <h3
        className="font-semibold text-[13.5px]"
        style={{ color: COLORS.SECTION_HEADER }}
      >
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token Field */}
    <div className="mb-4">
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor="pat"
          className="text-sm"
          style={{ color: COLORS.LABEL }}
        >
          Personal Access Token
        </label>
        <AiOutlineInfoCircle style={{ color: COLORS.LABEL }} />
      </div>
      <input
        type="text"
        id="pat"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full px-3 py-2 text-sm rounded border-2"
        style={{
          backgroundColor: COLORS.INPUT_BG,
          borderColor: COLORS.BORDER_PRIMARY,
        }}
      />
    </div>

    {/* Design URL Field */}
    <div className="mb-6">
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor="designUrl"
          className="text-sm"
          style={{ color: COLORS.LABEL_SECONDARY }}
        >
          Design URL
        </label>
        <AiOutlineInfoCircle style={{ color: COLORS.LABEL_SECONDARY }} />
      </div>
      <input
        type="text"
        id="designUrl"
        placeholder="https://www.figma.com/file/:"
        className="w-full px-3 py-2 text-sm rounded border"
        style={{
          backgroundColor: COLORS.INPUT_BG,
          borderColor: COLORS.BORDER_SECONDARY,
        }}
      />
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3 justify-center mb-8">
      <button
        className="text-white font-semibold rounded-md px-5 py-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: COLORS.ACCENT_BROWN }}
      >
        Awesome
      </button>
      <button
        className="text-white font-semibold rounded-md px-5 py-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: COLORS.ACCENT_BROWN }}
      >
        Prepare
      </button>
    </div>

    {/* Recent History Heading */}
    <h3
      className="font-semibold text-[13.5px] mt-6"
      style={{ color: COLORS.RECENT }}
    >
      Recent Breakdowns
    </h3>
  </div>
);
