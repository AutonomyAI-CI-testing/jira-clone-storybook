import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

const COLORS = {
  bg: "#1e1e1e",
  text: "#e5ddd4",
  mutedOrange: "#b07840",
  inputBg: "#2a2a2a",
  inputBorder: "#505050",
  buttonBg: "#b5532a",
};

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
      className="min-h-screen w-full p-6 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl font-bold">UI magician Agent</span>
        <FiSettings size={22} style={{ color: COLORS.text }} />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1 mb-2">
        <FiChevronUp size={16} style={{ color: COLORS.mutedOrange }} />
        <span style={{ color: COLORS.mutedOrange }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-8" />

      {/* 4. Section heading */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={20} style={{ color: COLORS.text }} />
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-sm font-medium">Personal Access Token</span>
        <FiInfo size={15} style={{ color: COLORS.text }} />
      </div>

      {/* 6. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded px-3 py-2 mb-4 text-sm outline-none"
        style={{
          backgroundColor: COLORS.inputBg,
          border: `1px solid ${COLORS.inputBorder}`,
          color: COLORS.text,
        }}
        readOnly
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-sm font-medium">Design URL</span>
        <FiInfo size={15} style={{ color: COLORS.text }} />
      </div>

      {/* 8. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded px-3 py-2 mb-4 text-sm outline-none"
        style={{
          backgroundColor: COLORS.inputBg,
          border: `1px dashed ${COLORS.inputBorder}`,
          color: COLORS.text,
        }}
        readOnly
      />

      {/* 9. Button row */}
      <div className="flex gap-4 justify-center mt-4">
        <button
          className="px-6 py-3 rounded-lg font-semibold text-white"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Awesome
        </button>
        <button
          className="px-6 py-3 rounded-lg font-semibold text-white"
          style={{ backgroundColor: COLORS.buttonBg }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
