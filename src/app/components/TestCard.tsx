import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1a] p-5 font-semibold flex flex-col"
  >
    {/* Header row */}
    <div className="flex justify-between items-center">
      <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
        UI magician Agent
      </span>
      <FiSettings className="text-[#b5b5b5]" size={16} />
    </div>

    {/* Subtitle row */}
    <div className="flex items-center gap-1 mt-2">
      <FiChevronUp className="text-[#8b9291]" size={12} />
      <span className="text-[#8b9291] text-[11.5px] font-semibold">
        From entire frame to a singl...
      </span>
    </div>

    {/* Spacer */}
    <div className="mt-8" />

    {/* Add New Design section header */}
    <div className="flex items-center gap-1">
      <FiChevronUp className="text-[#b2b2b1]" size={14} />
      <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token label */}
    <div className="flex items-center gap-1 mt-4">
      <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
        Personal Access Token
      </span>
      <FiInfo className="text-[#a4a4a3]" size={13} />
    </div>

    {/* PAT input */}
    <input
      className="mt-1 w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] outline-none"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      readOnly
    />

    {/* Design URL label */}
    <div className="flex items-center gap-1 mt-3">
      <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
        Design URL
      </span>
      <FiInfo className="text-[#a3a3a2]" size={13} />
    </div>

    {/* URL input */}
    <input
      className="mt-1 w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-[10.5px] text-[#71726e] placeholder:text-[#71726e] outline-none"
      placeholder="https://www.figma.com/file/:"
      readOnly
    />

    {/* Buttons row */}
    <div className="flex gap-3 mt-4">
      <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-4 py-2">
        Awesome
      </button>
      <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-4 py-2">
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <p className="mt-8 text-[#b0b0b0] text-[13.5px] font-semibold">
      Recent Breakdowns
    </p>
  </div>
);

export default TestCard;
