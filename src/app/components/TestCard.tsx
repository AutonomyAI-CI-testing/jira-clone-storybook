import { LuSettings2, LuChevronUp, LuInfo } from "react-icons/lu";

// CSS class names for input fields and buttons
const INPUT_STYLES =
  "bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-3 py-2 text-sm text-[#737470] placeholder-[#737470] outline-none w-full";
const BUTTON_STYLES =
  "flex-1 bg-[#b45309] text-white text-sm font-semibold rounded-lg py-3 cursor-pointer";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[300px] flex-col gap-4 rounded-xl bg-[#1e1e1e] p-5"
  >
    {/* Header row with agent name and settings icon */}
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <LuSettings2 className="text-xl text-[#b5b5b5]" />
    </div>

    {/* Subtitle row with agent status */}
    <div className="flex items-center gap-2">
      <LuChevronUp className="shrink-0 text-base text-[#8b9291]" />
      <span className="truncate text-sm text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* "Add New Design" section heading */}
    <div className="mt-4 flex items-center gap-2">
      <LuChevronUp className="shrink-0 text-base text-[#b2b2b1]" />
      <span className="text-base font-bold text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal Access Token input field */}
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#a4a4a3]">Personal Access Token</span>
        <LuInfo className="text-base text-[#a4a4a3]" />
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
        <span className="text-sm text-[#a4a4a3]">Design URL</span>
        <LuInfo className="text-base text-[#a4a4a3]" />
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
      <span className="text-base font-bold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
