import { LuSettings2, LuChevronUp, LuInfo } from "react-icons/lu";

// Color palette used throughout the card for dark theme consistency
const COLORS = {
  cardBg: "#1e1e1e",
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeadText: "#b2b2b1",
  labelText: "#a4a4a3",
  inputBg: "#2a2a2a",
  inputBorder: "#3a3a3a",
  inputText: "#737470",
  buttonBg: "#b45309",
  footerText: "#b0b0b0",
};

// CSS class names for input fields and buttons
const INPUT_STYLES =
  "bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-2 text-sm text-[#737470] placeholder-[#737470] outline-none w-full";
const BUTTON_STYLES =
  "flex-1 bg-[#b45309] text-white text-sm font-semibold rounded-lg py-3 cursor-pointer";

export const TestCard = () => (
  <div
    id="testElem"
    className={`bg-[${COLORS.cardBg}] flex w-[300px] flex-col gap-4 rounded-xl p-5`}
  >
    {/* Header row with agent name and settings icon */}
    <div className="flex items-center justify-between">
      <span className={`text-[${COLORS.headerText}] text-lg font-bold`}>
        UI magician Agent
      </span>
      <LuSettings2 className={`text-[${COLORS.headerText}] text-xl`} />
    </div>

    {/* Subtitle row with agent status */}
    <div className="flex items-center gap-2">
      <LuChevronUp
        className={`text-[${COLORS.subtitleText}] shrink-0 text-base`}
      />
      <span className={`text-[${COLORS.subtitleText}] truncate text-sm`}>
        From entire frame to a singl...
      </span>
    </div>

    {/* "Add New Design" section heading */}
    <div className="mt-4 flex items-center gap-2">
      <LuChevronUp
        className={`text-[${COLORS.sectionHeadText}] shrink-0 text-base`}
      />
      <span className={`text-[${COLORS.sectionHeadText}] text-base font-bold`}>
        Add New Design
      </span>
    </div>

    {/* Personal Access Token input field */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className={`text-[${COLORS.labelText}] text-sm`}>
          Personal Access Token
        </span>
        <LuInfo className={`text-[${COLORS.labelText}] text-base`} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className={INPUT_STYLES}
      />
    </div>

    {/* Design URL input field */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className={`text-[${COLORS.labelText}] text-sm`}>Design URL</span>
        <LuInfo className={`text-[${COLORS.labelText}] text-base`} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className={INPUT_STYLES}
      />
    </div>

    {/* Action buttons for design operations */}
    <div className="mt-2 flex gap-3">
      <button className={BUTTON_STYLES}>Awesome</button>
      <button className={BUTTON_STYLES}>Prepare</button>
    </div>

    {/* Footer displaying recent activity label */}
    <div className="mt-4">
      <span className={`text-[${COLORS.footerText}] text-base font-bold`}>
        Recent Breakdowns
      </span>
    </div>
  </div>
);
