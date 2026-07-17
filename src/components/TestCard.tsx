import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  const bg = "#2a2a2a";
  const inputBg = "#363636";
  const inputBorder = "#555555";
  const buttonBg = "#9a4a1a";
  const subtitleColor = "#c87941";
  const textMain = "#e8e8e8";
  const textMuted = "#a0a0a0";

  return (
    <div
      id="testElem"
      style={{ backgroundColor: bg, color: textMain, minHeight: "100vh" }}
      className="p-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold" style={{ color: textMain }}>
          UI magician Agent
        </span>
        <LuSettings size={22} style={{ color: textMuted }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <LuChevronUp size={16} style={{ color: subtitleColor }} />
        <span className="text-sm" style={{ color: subtitleColor }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <LuChevronUp size={18} style={{ color: textMain }} />
        <span className="text-lg font-bold" style={{ color: textMain }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold" style={{ color: textMain }}>
          Personal Access Token
        </span>
        <LuInfo size={16} style={{ color: textMuted }} />
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full rounded px-4 py-3 text-sm outline-none mb-4"
        style={{
          backgroundColor: inputBg,
          border: `1px solid ${inputBorder}`,
          color: textMuted,
        }}
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold" style={{ color: textMain }}>
          Design URL
        </span>
        <LuInfo size={16} style={{ color: textMuted }} />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full rounded px-4 py-3 text-sm outline-none mb-6"
        style={{
          backgroundColor: inputBg,
          border: `1px solid ${inputBorder}`,
          color: textMuted,
        }}
      />

      {/* Buttons row */}
      <div className="flex gap-4 mb-10">
        <button
          className="flex-1 py-3 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: buttonBg, color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: buttonBg, color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span className="text-xl font-bold" style={{ color: textMain }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
