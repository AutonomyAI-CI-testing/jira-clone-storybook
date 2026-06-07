import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";

// Color palette for the card styling
const COLORS = {
  background: "#272822",
  text: {
    primary: "#b5b5b5",
    secondary: "#8b9291",
    label: "#a4a4a3",
    heading: "#b0b0b0",
    muted: "#b2b2b1",
  },
  icons: {
    accent: "#b5622a",
    muted: "#b2b2b1",
    label: "#a4a4a3",
  },
  borders: {
    light: "#a5adad",
    medium: "#929291",
  },
  buttons: "#843a17",
  placeholder: "#737470",
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`text-white p-6 rounded-xl max-w-sm w-full`}
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="font-bold" style={{ color: COLORS.text.primary }}>
          UI magician Agent
        </span>
        <LuSettings2 style={{ color: COLORS.text.primary }} size={20} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp style={{ color: COLORS.icons.accent }} size={16} />
        <span className="text-sm" style={{ color: COLORS.text.secondary }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design row */}
      <div className="flex items-center gap-2 mt-6">
        <FiChevronUp style={{ color: COLORS.icons.muted }} size={16} />
        <span className="font-bold" style={{ color: COLORS.text.muted }}>
          Add New Design
        </span>
      </div>

      {/* Form section */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Personal Access Token field */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: COLORS.text.label }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle style={{ color: COLORS.icons.label }} size={16} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full mt-1 px-3 py-2 rounded text-gray-400 outline-none text-sm"
            style={{
              backgroundColor: COLORS.background,
              borderColor: COLORS.borders.light,
              borderWidth: "1px",
            }}
          />
        </div>

        {/* Design URL field */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm" style={{ color: COLORS.text.label }}>
              Design URL
            </span>
            <AiOutlineInfoCircle style={{ color: COLORS.icons.label }} size={16} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full mt-1 px-3 py-2 rounded text-gray-400 outline-none text-sm"
            style={{
              backgroundColor: COLORS.background,
              borderColor: COLORS.borders.medium,
              borderWidth: "2px",
            }}
          />
        </div>
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-6 justify-center">
        <button
          className="text-white rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttons }}
        >
          Awesome
        </button>
        <button
          className="text-white rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: COLORS.buttons }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="font-bold text-xl" style={{ color: COLORS.text.heading }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
