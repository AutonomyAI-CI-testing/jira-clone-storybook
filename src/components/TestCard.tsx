import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

const BG = "#2a2a2a";
const INPUT_BG = "#333333";
const INPUT_BORDER = "1px solid #555555";
const BUTTON_BG = "#b5451b";
const AMBER = "#c87941";
const WHITE = "#e8e8e8";
const WHITE_DIM = "#aaaaaa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: BG, color: WHITE, minHeight: "100vh" }}
      className="flex flex-col gap-0 p-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between pb-2">
        <span className="text-xl font-bold" style={{ color: WHITE }}>
          UI magician Agent
        </span>
        <LuSettings size={22} style={{ color: WHITE }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 pb-8">
        <LuChevronUp size={16} style={{ color: AMBER }} />
        <span className="text-sm" style={{ color: AMBER }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 pb-5">
        <LuChevronUp size={18} style={{ color: WHITE }} />
        <span className="text-lg font-bold" style={{ color: WHITE }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 pb-2">
        <span className="text-sm font-semibold" style={{ color: WHITE }}>
          Personal Access Token
        </span>
        <LuInfo size={16} style={{ color: WHITE_DIM }} />
      </div>

      {/* Token input */}
      <div className="pb-4">
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: INPUT_BG,
            border: INPUT_BORDER,
            color: WHITE_DIM,
          }}
        />
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 pb-2">
        <span className="text-sm font-semibold" style={{ color: WHITE }}>
          Design URL
        </span>
        <LuInfo size={16} style={{ color: WHITE_DIM }} />
      </div>

      {/* URL input */}
      <div className="pb-6">
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: INPUT_BG,
            border: INPUT_BORDER,
            color: WHITE_DIM,
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 pb-10">
        <button
          className="flex-1 rounded-lg px-5 py-3 text-sm font-semibold"
          style={{ backgroundColor: BUTTON_BG, color: WHITE }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-5 py-3 text-sm font-semibold"
          style={{ backgroundColor: BUTTON_BG, color: WHITE }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <span className="text-lg font-bold" style={{ color: WHITE }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
