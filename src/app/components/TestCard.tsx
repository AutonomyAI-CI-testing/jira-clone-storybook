import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{ background: "#282828" }}
    className="w-[320px] rounded-lg p-5 text-white font-sans flex flex-col gap-4"
  >
    {/* 1. Header row */}
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold">UI magician Agent</span>
      <LuSettings size={22} className="text-gray-400" />
    </div>

    {/* 2. Subtitle row */}
    <div className="flex items-center gap-2" style={{ color: "#c87941" }}>
      <LuChevronUp size={16} />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    {/* 3. Spacer */}
    <div className="h-4" />

    {/* 4. Section header */}
    <div className="flex items-center gap-2 font-bold text-base">
      <LuChevronUp size={18} />
      <span>Add New Design</span>
    </div>

    {/* 5. Personal Access Token */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-sm">
        <span>Personal Access Token</span>
        <LuInfo size={14} className="text-gray-400" />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{ background: "#333", borderColor: "#555" }}
        className="w-full rounded border px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      />
    </div>

    {/* 6. Design URL */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-sm">
        <span>Design URL</span>
        <LuInfo size={14} className="text-gray-400" />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{ background: "#333", borderColor: "#555" }}
        className="w-full rounded border px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      />
    </div>

    {/* 7. Action buttons */}
    <div className="flex gap-3">
      <button
        type="button"
        style={{ background: "#a0522d" }}
        className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        style={{ background: "#a0522d" }}
        className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
      >
        Prepare
      </button>
    </div>

    {/* 8. Recent Breakdowns */}
    <div className="text-lg font-bold pt-2">Recent Breakdowns</div>
  </div>
);
