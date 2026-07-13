import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  const CARD_BG = "#2a2a2a";
  const INPUT_BG = "#333333";
  const INPUT_BORDER = "#555555";
  const BUTTON_BG = "#b65c02";
  const SUBTITLE_COLOR = "#a07060";

  return (
    <div id="testElem">
      <div
        className="flex w-full max-w-sm flex-col gap-5 rounded-lg p-5"
        style={{ backgroundColor: CARD_BG }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
          <LuSettings size={22} color="#c8c8c8" />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={16} style={{ color: SUBTITLE_COLOR }} />
          <span className="text-sm" style={{ color: SUBTITLE_COLOR }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Add New Design heading */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={20} color="#ffffff" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="pat-input" className="text-sm text-white">
              Personal Access Token
            </label>
            <LuInfo size={16} color="#9fadbc" />
          </div>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: INPUT_BG,
              border: `1px solid ${INPUT_BORDER}`,
              color: "#c8c8c8",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="url-input" className="text-sm text-white">
              Design URL
            </label>
            <LuInfo size={16} color="#9fadbc" />
          </div>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: INPUT_BG,
              border: `1px solid ${INPUT_BORDER}`,
              color: "#c8c8c8",
            }}
          />
        </div>

        {/* Buttons row */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: BUTTON_BG }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: BUTTON_BG }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-4">
          <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};
