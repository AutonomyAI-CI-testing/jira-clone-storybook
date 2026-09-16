import { FaChevronUp, FaCog } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-[#1c1c18] p-3 font-sans text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog className="h-4 w-4 text-[#8b9291]" />
    </div>

    {/* Collapsible row 1 */}
    <div className="mb-6 flex items-center gap-2">
      <FaChevronUp className="h-3 w-3 text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a single...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="mb-3 flex items-center gap-2">
      <FaChevronUp className="h-3 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label className="mb-1 block text-[11.5px] font-semibold text-[#a4a4a3]">
      Personal Access Token
    </label>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mb-3 w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
    />

    <label className="mb-1 block text-[11.5px] font-semibold text-[#a3a3a2]">
      Design URL
    </label>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mb-4 w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
    />

    {/* Buttons */}
    <div className="mb-8 flex gap-3">
      <button className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </button>
      <button className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
