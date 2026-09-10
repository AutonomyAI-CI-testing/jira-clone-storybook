import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#1d1e1a] p-5 font-sans">
    {/* Header row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={15} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsible row 1 */}
    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Collapsible row 2 */}
    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp size={14} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-4">
      <div className="flex items-center gap-1.5">
        <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </label>
        <FiInfo size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    {/* Design URL field */}
    <div className="mt-4">
      <div className="flex items-center gap-1.5">
        <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </label>
        <FiInfo size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    {/* Buttons row */}
    <div className="mt-4 flex gap-2">
      <button
        type="button"
        className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns section */}
    <div className="mt-10">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
