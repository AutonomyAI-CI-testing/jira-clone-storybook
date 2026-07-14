import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

const WHITE = "#ffffff";
const SUBTITLE_COLOR = "#b07050";
const CARD_BG = "#2a2a2a";
const INPUT_BG = "#383838";
const INPUT_BORDER = "#555555";
const BUTTON_BG = "#c05a2a";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="flex flex-col gap-4 p-5 w-full max-w-sm font-sans"
        style={{ backgroundColor: CARD_BG }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold" style={{ color: WHITE }}>
            UI magician Agent
          </h1>
          <LuSettings size={22} style={{ color: WHITE }} />
        </div>

        {/* Subtitle */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={16} style={{ color: SUBTITLE_COLOR }} />
          <span className="text-sm" style={{ color: SUBTITLE_COLOR }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="mt-4" />

        {/* Add New Design */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={18} style={{ color: WHITE }} />
          <h2 className="text-base font-bold" style={{ color: WHITE }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium" style={{ color: WHITE }}>
              Personal Access Token
            </label>
            <LuInfo size={16} style={{ color: WHITE }} />
          </div>
          <input
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: INPUT_BG,
              border: `1px solid ${INPUT_BORDER}`,
              color: "#aaaaaa",
            }}
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium" style={{ color: WHITE }}>
              Design URL
            </label>
            <LuInfo size={16} style={{ color: WHITE }} />
          </div>
          <input
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: INPUT_BG,
              border: `1px solid ${INPUT_BORDER}`,
              color: "#aaaaaa",
            }}
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center pt-2">
          <button
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: BUTTON_BG, color: WHITE }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: BUTTON_BG, color: WHITE }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <h2 className="text-base font-bold" style={{ color: WHITE }}>
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
